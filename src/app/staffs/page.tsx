import React from "react";
import "./staff.scss";
import { fetchData, urlFor } from "../db/db";
type Props = {};

export default async function Staff({}: Props) {
  const staffData = await fetchData<any>(`
		*[_type == "staffs"]
	`);

  const description = await fetchData<any>(`
		*[_type == "general" && preset == "main"][0]{
			'desc': page_descriptions.staffs_desc
		}
	`);
  // console.log(staffData);
  return (
    <main id="page_staff">
      <section id="staff-heading">
        <div className="styled-title">
          <h2>STAFF</h2>
        </div>
        <p>{description.desc}</p>
      </section>
      <section id="staff-list">
        {staffData.map((staff: any) => {
          return (
            <a
              href={staff.link}
              target="_blank"
              className="staff-card"
              key={staff._id}
            >
              <div className="staff-art-container">
                <img
                  src={urlFor(staff.image).url()}
                  alt=""
                  className="staff-art"
                />
              </div>
              <div className="staff-info">
                <h2>{staff.name}</h2>
                <svg
                  width="199"
                  height="18"
                  viewBox="0 0 199 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.7333 8.86121L9.39355 17.5215L18.0538 8.86121L9.39355 0.200952L0.7333 8.86121ZM198.824 8.86121L190.164 0.200952L181.504 8.86121L190.164 17.5215L198.824 8.86121ZM9.39355 10.3612H190.164V7.36121H9.39355V10.3612Z"
                    fill="#FDDF63"
                  />
                </svg>
                <p>{staff.title}</p>
              </div>
            </a>
          );
        })}

        {/* <a href="#" target="_blank" className="staff-card">
          <div className="staff-art-container">
            <img
              src="/graphics/staff_sample.png"
              alt=""
              className="staff-art"
            />
          </div>
          <div className="staff-info">
            <h2>Staff Name</h2>
            <svg
              width="199"
              height="18"
              viewBox="0 0 199 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.7333 8.86121L9.39355 17.5215L18.0538 8.86121L9.39355 0.200952L0.7333 8.86121ZM198.824 8.86121L190.164 0.200952L181.504 8.86121L190.164 17.5215L198.824 8.86121ZM9.39355 10.3612H190.164V7.36121H9.39355V10.3612Z"
                fill="#FDDF63"
              />
            </svg>
            <p>Role or title</p>
          </div>
        </a>
        <a href="#" target="_blank" className="staff-card">
          <div className="staff-art-container">
            <img
              src="/graphics/staff_sample.png"
              alt=""
              className="staff-art"
            />
          </div>
          <div className="staff-info">
            <h2>Staff Name</h2>
            <svg
              width="199"
              height="18"
              viewBox="0 0 199 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.7333 8.86121L9.39355 17.5215L18.0538 8.86121L9.39355 0.200952L0.7333 8.86121ZM198.824 8.86121L190.164 0.200952L181.504 8.86121L190.164 17.5215L198.824 8.86121ZM9.39355 10.3612H190.164V7.36121H9.39355V10.3612Z"
                fill="#FDDF63"
              />
            </svg>
            <p>Role or title</p>
          </div>
        </a>
        <a href="#" target="_blank" className="staff-card">
          <div className="staff-art-container">
            <img
              src="/graphics/staff_sample.png"
              alt=""
              className="staff-art"
            />
          </div>
          <div className="staff-info">
            <h2>Staff Name</h2>
            <svg
              width="199"
              height="18"
              viewBox="0 0 199 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.7333 8.86121L9.39355 17.5215L18.0538 8.86121L9.39355 0.200952L0.7333 8.86121ZM198.824 8.86121L190.164 0.200952L181.504 8.86121L190.164 17.5215L198.824 8.86121ZM9.39355 10.3612H190.164V7.36121H9.39355V10.3612Z"
                fill="#FDDF63"
              />
            </svg>
            <p>Role or title</p>
          </div>
        </a>
        <a href="#" target="_blank" className="staff-card">
          <div className="staff-art-container">
            <img
              src="/graphics/staff_sample.png"
              alt=""
              className="staff-art"
            />
          </div>
          <div className="staff-info">
            <h2>Staff Name</h2>
            <svg
              width="199"
              height="18"
              viewBox="0 0 199 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.7333 8.86121L9.39355 17.5215L18.0538 8.86121L9.39355 0.200952L0.7333 8.86121ZM198.824 8.86121L190.164 0.200952L181.504 8.86121L190.164 17.5215L198.824 8.86121ZM9.39355 10.3612H190.164V7.36121H9.39355V10.3612Z"
                fill="#FDDF63"
              />
            </svg>
            <p>Role or title</p>
          </div>
        </a>
        <a href="#" target="_blank" className="staff-card">
          <div className="staff-art-container">
            <img
              src="/graphics/staff_sample.png"
              alt=""
              className="staff-art"
            />
          </div>
          <div className="staff-info">
            <h2>Staff Name</h2>
            <svg
              width="199"
              height="18"
              viewBox="0 0 199 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.7333 8.86121L9.39355 17.5215L18.0538 8.86121L9.39355 0.200952L0.7333 8.86121ZM198.824 8.86121L190.164 0.200952L181.504 8.86121L190.164 17.5215L198.824 8.86121ZM9.39355 10.3612H190.164V7.36121H9.39355V10.3612Z"
                fill="#FDDF63"
              />
            </svg>
            <p>Role or title</p>
          </div>
        </a>
        <a href="#" target="_blank" className="staff-card">
          <div className="staff-art-container">
            <img
              src="/graphics/staff_sample.png"
              alt=""
              className="staff-art"
            />
          </div>
          <div className="staff-info">
            <h2>Staff Name</h2>
            <svg
              width="199"
              height="18"
              viewBox="0 0 199 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.7333 8.86121L9.39355 17.5215L18.0538 8.86121L9.39355 0.200952L0.7333 8.86121ZM198.824 8.86121L190.164 0.200952L181.504 8.86121L190.164 17.5215L198.824 8.86121ZM9.39355 10.3612H190.164V7.36121H9.39355V10.3612Z"
                fill="#FDDF63"
              />
            </svg>
            <p>Role or title</p>
          </div>
        </a>
        <a href="#" target="_blank" className="staff-card">
          <div className="staff-art-container">
            <img
              src="/graphics/staff_sample.png"
              alt=""
              className="staff-art"
            />
          </div>
          <div className="staff-info">
            <h2>Staff Name</h2>
            <svg
              width="199"
              height="18"
              viewBox="0 0 199 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.7333 8.86121L9.39355 17.5215L18.0538 8.86121L9.39355 0.200952L0.7333 8.86121ZM198.824 8.86121L190.164 0.200952L181.504 8.86121L190.164 17.5215L198.824 8.86121ZM9.39355 10.3612H190.164V7.36121H9.39355V10.3612Z"
                fill="#FDDF63"
              />
            </svg>
            <p>Role or title</p>
          </div>
        </a>
        <a href="#" target="_blank" className="staff-card">
          <div className="staff-art-container">
            <img
              src="/graphics/staff_sample.png"
              alt=""
              className="staff-art"
            />
          </div>
          <div className="staff-info">
            <h2>Staff Name</h2>
            <svg
              width="199"
              height="18"
              viewBox="0 0 199 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.7333 8.86121L9.39355 17.5215L18.0538 8.86121L9.39355 0.200952L0.7333 8.86121ZM198.824 8.86121L190.164 0.200952L181.504 8.86121L190.164 17.5215L198.824 8.86121ZM9.39355 10.3612H190.164V7.36121H9.39355V10.3612Z"
                fill="#FDDF63"
              />
            </svg>
            <p>Role or title</p>
          </div>
        </a>
        <a href="#" target="_blank" className="staff-card">
          <div className="staff-art-container">
            <img
              src="/graphics/staff_sample.png"
              alt=""
              className="staff-art"
            />
          </div>
          <div className="staff-info">
            <h2>Staff Name</h2>
            <svg
              width="199"
              height="18"
              viewBox="0 0 199 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.7333 8.86121L9.39355 17.5215L18.0538 8.86121L9.39355 0.200952L0.7333 8.86121ZM198.824 8.86121L190.164 0.200952L181.504 8.86121L190.164 17.5215L198.824 8.86121ZM9.39355 10.3612H190.164V7.36121H9.39355V10.3612Z"
                fill="#FDDF63"
              />
            </svg>
            <p>Role or title</p>
          </div>
        </a> */}
      </section>
    </main>
  );
}
