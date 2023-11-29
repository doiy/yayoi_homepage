import React from 'react';

const GoogleMap = () => {
  return (
    <div>
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.231343371907!2d139.756848276363!3d35.720528572574665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d35c99d810d%3A0x9ab813315803045d!2z44KE44KI44GE5Zyo5a6F44Kv44Oq44OL44OD44Kv!5e0!3m2!1sja!2sjp!4v1701246672015!5m2!1sja!2sjp"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
