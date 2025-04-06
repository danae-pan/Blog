// src/components/HomepageFeatures.js
import React from 'react';
import styles from './HomepageFeatures.module.css';

export default function Homepage() {
  return (
    <main>
      <section className={styles.profile}>
        {/* Profile Text */}
        <div className={styles.profileText}>
          <h1 className={styles.profileTitle}>WHOAMI</h1>
          <p className={styles.profileDescription}>
          Welcome to my journal, where I spent more time than I should (or perhaps more than I have) working on penetration testing challenges and writeups. 
          </p>
          <h2>My Journey</h2>
          <p>
           I started my journey in the world of mathematics from a young age, and my fascination with technology grew when I started my studies 
           in Electrical Computer Engineering at the Aristotle University. There, I focused on telecommunications, networking, and wireless technologies. 
           My first internship involved exploring Linux distros and basic hardware at AuTh IT center. I later worked as an audio engineering before pursuing 
           a second master's in Visual Computing at Denmark's Technical University. As a student, I worked for a 2-year period at the LEGO group where I contributed
           to backend development and security features. At the same time, I was organising events, creating content and graphic design for marketing purposes. Currently, I am 
           working on my master's thesis on insider threats and deception techniques. Beyond academics, I am an art and sports enthusiastics, I like books, cats and movies and in general, 
           I have it as my hobby to create new hobbies. I am an advocate of team work, I enjoy helping others discover their passions and I am always open to learn new things from others.
          </p>
          <h2>What You'll Find Here</h2>
          <p>
            On this blog, I will documents all my successfull (or not) penetration experiences, in different 
            environments. 
          </p>
          
          <h3>Get in Touch</h3>
          <p>
            If you'd like to collaborate or chat, feel free to reach out to me on LinkedIn (get the link at the bottom of the page).
          </p>
          <h4>Disclaimmer</h4>
          <p>
            This blog is not intended to be a substitute for professional advice.
            I am just a girl who likes to hack :) 
          </p>
        </div>
      </section>
    </main>
  );
}
