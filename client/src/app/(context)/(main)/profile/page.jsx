"use client";
import { Notification, Plantation, Farming } from "@/assets";
import Image from "next/image";
import React from "react";
import { FaUser } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { MdEdit, MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useAuth } from "@/context/AuthContext";
import { PostCard } from "@/components";

export default function Page() {
  const {user, setUser} = useAuth()

  const handleLogout = () => {
    setUser(null)
  }

  const postData = [
    {
      img: Plantation,
      title: "The Secret Life of Earthworms",
      description:
        "How these tiny creatures boost soil health and improve crop yield.",
    },
    {
      img: Farming,
      title: "Banana Trees: More Than Just Bananas",
      description:
        "Discover the surprising uses of banana trees beyond fruit production.",
    },
    {
      img: Plantation,
      title: "Moonlight Farming: Does It Work?",
      description:
        "Exploring the ancient technique of nighttime planting for better growth.",
    },
    {
      img: Farming,
      title: "AI in Agriculture: The Future is Now",
      description:
        "How artificial intelligence is revolutionizing modern farming practices.",
    },
  ];
  return (
    <div className="h-full flex flex-col gap-[2rem] py-[1rem]">
      <div className="flex flex-col items-center text-center gap-[1rem]">
        {user ? <Image src={user?.pic} alt="profile picture" width={100} height={100} className="rounded-full" /> : <FaUser fill="green" size={50} />}
        <h2 className="text-[1.8rem] font-bold">{user?.name}</h2>
        <p className="text-[1.2rem] text-gray-600 max-w-[80%]">
          Passionate about farming & sustainable agriculture 🌱
        </p>
      </div>

      <div className="flex justify-center gap-[2rem] text-center w-full">
        <div className="flex flex-col items-center w-[6rem]">
          <h3 className="font-bold text-green">150</h3>
          <h3 className="text-gray-500">Posts</h3>
        </div>
        <div className="flex flex-col items-center w-[6rem]">
          <h3 className="font-bold text-green">2.3K</h3>
          <h3 className="text-gray-500">Followers</h3>
        </div>
        <div className="flex flex-col items-center w-[6rem]">
          <h3 className="font-bold text-green">180</h3>
          <h3 className="text-gray-500">Following</h3>
        </div>
      </div>

      <div className="flex justify-center gap-[1rem] w-full">
        <button className="flex items-center justify-center gap-[0.5rem] bg-green-200 px-[2rem] py-[1rem] rounded-full w-[15rem]">
          <MdEdit size={20} className="text-green" />
          <h3 className="text-green font-bold">Edit Profile</h3>
        </button>
        <button className="flex items-center justify-center gap-[0.5rem] bg-[#E3F2FD] px-[2rem] py-[1rem] rounded-full w-[15rem]">
          <IoMdSettings size={20} className="text-[#1565C0]" />
          <h3 className="text-[#1565C0] font-bold">Settings</h3>
        </button>
      </div>

      <div className="flex flex-col gap-[1.5rem] p-[1rem] rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="text-[1.6rem] font-bold text-secondary">Your Posts</h3>
          <button className="flex items-center justify-center gap-[0.5rem] bg-[#E3F2FD] px-[1.5rem] py-[0.5rem] rounded-full w-fit">
            <p>View all</p>
          </button>
        </div>
        <div className="w-full">
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            modules={[Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            speed={800}
            className="w-full max-w-full h-[100%] overflow-hidden"
          >
            {postData.map((post, index) => (
              <SwiperSlide key={index}>
                <PostCard {...post} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
