/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { databases } from "../../lib/appwrite";

import businessImg from "../../assets/business.png";
import carsBikesImg from "../../assets/cars.png";
import educationImg from "../../assets/education.png";
import fitnessImg from "../../assets/fitness.png";
import artDesignImg from "../../assets/art-design.png";
import cryptoImg from "../../assets/crypto.png";
import fashionImg from "../../assets/fashion.png";
import foodImg from "../../assets/food.png";
import brandImg from "../../assets/brand.png";
import blogImg from "../../assets/blog.png";

// Category type
export type Category = {
  name: string;
  image: string;
};

const DATABASE_ID = "69a55aa1001ac4d8ba49";
const COLLECTION_ID = "listings";

const CategorySection: React.FC = () => {

  const navigate = useNavigate();
  const [categories, setCategories] = useState<Category[]>([]);

  const nicheImages: Record<string, string> = {
    "Architecture": businessImg,
    "Blogs & LifeStyle": blogImg,
    "Motivation & Quotes": brandImg,
    "Travel": carsBikesImg,
    "Education": educationImg,
    "Fitness": fitnessImg,
    "Art & Design": artDesignImg,
    "Crypto": cryptoImg,
    "Fashion": fashionImg,
    "Food": foodImg,
  };

  useEffect(() => {

    const fetchCategories = async () => {
      try {
        const res = await databases.listDocuments(
          DATABASE_ID,
          COLLECTION_ID
        );

        const uniqueNiches = [
          ...new Set(res.documents.map((doc: any) => doc.niche))
        ];

        const formatted: Category[] = uniqueNiches.map((niche: string) => ({
          name: niche,
          image: nicheImages[niche]
        }));

        setCategories(formatted);

      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();

  }, []);

  return (
    <section className="bg-[#0B1220] py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-gray-100 rounded p-4 sm:p-8 lg:p-12">

        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-6 sm:mb-10">
          Explore by Category
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-6">

          {categories.map((cat) => (
            <div
              key={cat.name}
              onClick={() =>
                navigate(`/marketplace?niche=${encodeURIComponent(cat.name)}`)
              }
              className="cursor-pointer bg-white rounded-2xl p-3 sm:p-4 text-center shadow hover:shadow-lg hover:-translate-y-1 sm:hover:-translate-y-2 transition-transform duration-200"
            >

              <img
                src={cat.image}
                alt={cat.name}
                className="mx-auto mb-2 sm:mb-3 w-10 h-10 sm:w-14 sm:h-14 object-contain"
              />

              <p className="font-medium text-xs sm:text-sm">
                {cat.name}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default CategorySection;