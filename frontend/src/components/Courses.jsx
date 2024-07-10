import React, { useEffect, useState } from 'react'
import { list } from '../list';
import { Link } from 'react-router-dom';
import Card from './Card';
import axios from "axios";
import Footer from './Footer';
import Header from './Header';

const Courses = () => {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4000/book");
        console.log(res);
        setBook(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  return (
    <>
    <Header />
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-blue-600"> Here! :)</span>
          </h1>
          <p className="my-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
            assumenda? Repellendus, iste corrupti? Tempore laudantium
            repellendus accusamus accusantium sed architecto odio, nisi expedita
            quas quidem nesciunt debitis dolore non aspernatur praesentium
            assumenda sint quibusdam, perspiciatis, explicabo sequi fugiat amet
            animi eos aut. Nobis quisquam reiciendis sunt quis sed magnam
            consequatur!
          </p>
          <Link to="/">
            <button className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="my-12 grid grid-cols-1 md:grid-cols-4">
          {list.map((item,index) => (
            <Card key={index} item={item} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Courses
