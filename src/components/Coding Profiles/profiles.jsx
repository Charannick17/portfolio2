import React from 'react';
import './profiles.css';

const CodingProfiles = () => {
  const profiles = [
    {
      name: "LeetCode",
      link: "https://leetcode.com/u/charannick/",
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
    },
    {
      name: "GeeksforGeeks",
      link: "https://www.geeksforgeeks.org/user/ncharan229/",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/43/GeeksforGeeks.svg"
    },
    {
      name: "CodeChef",
      link: "https://www.codechef.com/users/ncharan229",
      logo: "https://s3.amazonaws.com/codechef_shared/sites/all/themes/abessive/logo.png"
    },
    {
      name: "HackerRank",
      link: "https://www.hackerrank.com/profile/ncharan229",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/65/HackerRank_logo.png"
    }
    ,
    {
      name: "Coding Ninjas",
      link: "https://www.naukri.com/code360/profile/cd407f8c-1fe1-4bef-b15e-a0f87d9d940b",
      logo: "https://files.codingninjas.in/new-cn-logos-1-1711622387.svg"
    }
  ];

  return (
    <section className="coding section" id="coding">
      <h2 className="section__title">Coding Profiles</h2>
      <span className="section__subtitle">Competitive Programming & Practice</span>

      <div className="coding__container">
        {profiles.map((profile, index) => (
          <a
            key={index}
            href={profile.link}
            target="_blank"
            rel="noreferrer"
            className="coding__item"
          >
            <img src={profile.logo} alt={profile.name} className="coding__logo" />
            <span>{profile.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default CodingProfiles;
