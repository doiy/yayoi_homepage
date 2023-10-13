import React from 'react'
import Doctors from './doctors.json'
import './DoctorIntroduction.css'

const medical_field = (filed_name, doctors) => {
  return(
    <div className="medical_field">
      <div className="field">
        {filed_name + " ▼"}
      </div>
      {doctor_information(doctors)}
    </div>
  )
}

const doctor_information = (doctors) => {
  // const text = "吉田 寛  　消化外科专家团队　日本医科大学附属医院副院長　大学院教授、博士生导师、消化器外科主任　擅长　消化器外科全般、肝胆膵肿瘤、門脈圧亢進症、脾臓、移植外科";
  const informationBody = doctors.map((item) => {
    const name = item.name
    const textLine1 = item.text1
    const textLine2 = item.text2
    const textLine3 = item.text3
    const textLine4 = item.text4
    const textLine5 = item.text5
    const textLine6 = item.text6

  

    return(
      <div className="doctor">
        <img className="doctor_img" src={process.env.PUBLIC_URL+item.image_path} alt={item.alt} />
        <div className="doctor-text">
          <ul>
            <li>{name}</li>
            <li>{textLine1}</li>
            <li>{textLine2}</li>
            <li>{textLine3}</li>
            <li>{textLine4}</li>
            <li>{textLine5}</li>
            <li>{textLine6}</li>

          </ul>

        </div>
      </div>

    )
  })

  return(
    <div>
      {informationBody}
    </div>     
  )
}


const body = Doctors.doctor_list.map((item) => {
  return(
    medical_field(item.field, item.doctors)
  )
})


const DoctorIntroduction = () => {
  
  return (
    <div>
      <div className="banner">
          <img className="banner_img" src={process.env.PUBLIC_URL+"/test.jpg"} alt="test" />
      </div>
      
      <div className="title">
        セカンドオピニオン専門医師紹介
      </div>
      {body}
    </div>

  )
}

export default DoctorIntroduction