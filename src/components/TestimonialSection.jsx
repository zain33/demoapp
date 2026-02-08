import React, { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";
import "./TestimonialSection.css";

/* =======================
   Marquee Component
======================= */
const Marquee = ({
  children,
  direction = "left",
  speed = 40,
  pauseOnHover = true,
}) => {
  const [width, setWidth] = useState(0);
  const contentRef = useRef(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (contentRef.current) {
      setWidth(contentRef.current.scrollWidth);
    }
  }, [children]);

  return (
    <div
      className="marquee-wrapper"
      onMouseEnter={() => pauseOnHover && setPaused(true)}
      onMouseLeave={() => pauseOnHover && setPaused(false)}
    >
      <div
        className={`marquee-track ${direction}`}
        style={{
          animationDuration: `${width / speed}s`,
          animationPlayState: paused ? "paused" : "running",
        }}
      >
        <div ref={contentRef} className="marquee-content">
          {children}
        </div>
        <div className="marquee-content">{children}</div>
      </div>
    </div>
  );
};

/* =======================
   Review Card
======================= */
const ReviewCard = ({ avatar, name, rating, review }) => (
  <div className="review-card">
    <div className="review-header">
      <img src={avatar} alt={name} />
      <div>
        <h4>{name}</h4>
        <div className="stars">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={16}
              className={i < rating ? "star filled" : "star"}
            />
          ))}
        </div>
      </div>
    </div>

    <p>{review}</p>
  </div>
);

/* =======================
   Main Section Component
======================= */
const TestimonialSection = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
      rating: 5,
      review:
        "QllmSoft delivered outstanding quality and professionalism. Highly recommended!",
    },
    {
      id: 2,
      name: "Michael Chen",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
      rating: 4,
      review:
        "Great experience working with the team. Communication and results were excellent.",
    },
    {
      id: 3,
      name: "Emma Davis",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=emma",
      rating: 5,
      review:
        "They built exactly what we needed. Clean UI and strong backend performance.",
    },
    {
      id: 4,
      name: "James Wilson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=james",
      rating: 4,
      review:
        "Reliable and professional software development partner. Will work again.",
    },
  ];

  return (
    <section className="section testimonial-section bg-light">
      <div className="container">
        <div className="section-title">
          <h2>What Our Clients Say</h2>
        </div>

        <Marquee speed={30}>
          {reviews.map((r) => (
            <ReviewCard key={r.id} {...r} />
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default TestimonialSection;
