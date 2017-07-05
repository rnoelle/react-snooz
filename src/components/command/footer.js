import React from 'react';
require('../../styles/footer.css');

export default function Footer() {
  return (
    <footer>
      <section>
      <div>
        <h5>Links</h5>
        <ul>
          <li>Landing Page</li>
          <li>Dashboard</li>
          <li>Profile</li>
        </ul>
      </div>
      <div>
        <h5>Contact</h5>
        <ul>
          <li>snooz@gmail.com</li>
          <li>(555)239-3209</li>
        </ul>
      </div>
    </section>
      <div id="copyright">
        <h5>Copyright (c) 2017 Noelle Bott All Rights Reserved.</h5>
      </div>
    </footer>
  )
}
