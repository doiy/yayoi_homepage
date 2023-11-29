import React from 'react';
import './InternalMedicine.css'; 
import Button from '@mui/material/Button';

const InternalMedicine = () => {
  return (
    <div className="page-container">
      <h2>综合内科门诊</h2>

      <div className="Button">
        {/* <Link to="/patient_registration"> */}
            <Button variant="contained" size="medium">会員入会</Button>
        {/* </Link> */}
      </div>
      <div className="section-container">
        <p> 东京国际医疗(肿瘤)中心为帮助广大海外旅客、专门针对各种生活中常见的疾病进行诊治。如肾脏疾病、糖尿病、心血管等疾病。以及在旅途中突发的常见疾病需要就医时本中心将提诊治。</p>
      </div>
      <p> 综合内科医生</p>

      <div className="doctor">
        <img className="doctor_img" src={process.env.PUBLIC_URL+"/mizuguti.png"} alt="水口先生" />
        <div className="doctor-text">
          <ul>
            <li>水口义昭</li>
            <ul>
              <li>资    历:</li>
              <ul>
                <li>医学博士</li>
                <li>弥生24小时健康护理医院 院长</li>
                <li>日本在宅医療連合学会 専門医・指導医  </li>
              </ul>
              <li>认定资格:</li>
              <ul>
                <li>日本在宅医療連合学会 専門医・指導医</li>
                <li>日本外科学会 専門医 / 日本消化器外科学会 専門医 </li>
                <li>日本肝臓学会 専門医 / 日本緩和医療学会 認定医 </li>
                <li>日本医科大学 消化器外科 非常勤講師  </li>
                <li>日本医科大学 連携教授 </li>
              </ul>
            </ul>
          </ul>

        </div>
      </div>
      <p> 就诊方式：远程线上就诊・处方药配送服务指南(PDF)　</p>

      <div className="section-container">
        <ol>
          <li>在线登记   东京国际医疗中心门诊登记卡 </li>
          <li>预约初诊线上就诊时间</li>
          <li>填写初诊问诊表，问诊票和药物问诊票，根据病情按排最优专家复诊患者，请直接在线上挂复诊号，直接按排您的专属医生。　如有当地医院检查报告的患者，请将这些文件用PDF发邮件至本中心。请在PDF文件中注明患者的姓名及出生日期。</li>
          <p>综合内科门诊邮箱:      @</p>
          <li>支付诊费⦿本中心将发邮件给您，请您按照要求完成付款手续。(具体支付金额及支付方式，请以账单为准)</li>  
          <li>确定线上就诊时间及如何正确使用线上就诊APP指南(PDF)本中心工作人员将提前指导您如何在线上就诊</li>  
          <li>根据医嘱，如需追加检查的患者，请再此预约就诊。线上就诊结束后，如医嘱有开具处方，根据药费和药物配送费用报价进行付款。本中心将发送邮件给您，请按照要求完成付款手续。(具体支付金额及支付方式，请以账单为准)</li>  
          <li>收到药品后，根据医嘱进行服药。</li>  

        </ol>
      </div>
    </div>
  );
};

export default InternalMedicine;
