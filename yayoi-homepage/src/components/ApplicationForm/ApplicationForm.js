import React, { useState } from 'react';

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    applicationDate: '',
    applicantName: '',
    relationshipWithPatient: 'patient', // デフォルトは "patient"
    patientName: '',
    patientEmail: '',
    otherParticipants: '',
    relationshipWithPatientOthers: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    // フォームデータを使って必要な処理を行う
  };

  return (
    <div className="application-form-container">
      <h2>海外远程第二诊疗意见参加申请</h2>
      <h3>在此向贵中心申请海外远程第二诊疗意见，所有出席人员都是经过患者同意的。一般情况下，中介人员不能出席海外远程第二诊疗意见。</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>申请日期 [必須]</label>
          <input
            type="date"
            name="applicationDate"
            value={formData.applicationDate}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>申请人姓名 [必须]</label>
          <input
            type="text"
            name="applicantName"
            value={formData.applicantName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>和患者的关系[必须]</label>
          <label>
            <input
              type="radio"
              name="relationshipWithPatient"
              value="patient"
              checked={formData.relationshipWithPatient === 'patient'}
              onChange={handleInputChange}
              required
            />
            患者本人
          </label>
          <label>
            <input
              type="radio"
              name="relationshipWithPatient"
              value="others"
              checked={formData.relationshipWithPatient === 'others'}
              onChange={handleInputChange}
              required
            />
            本人以外
          </label>
        </div>
        {formData.relationshipWithPatient === 'others' && (
          <div>
            <label>参加者(患者本人的姓名)</label>
            <input
              type="text"
              name="patientName"
              value={formData.patientName}
              onChange={handleInputChange}
            />
          </div>
        )}
        <div>
          <label>患者本人的邮箱</label>
          <input
            type="email"
            name="patientEmail"
            value={formData.patientEmail}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>其他参加人员的姓名</label>
          <textarea
            name="otherParticipants"
            value={formData.otherParticipants}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>其他参加人员和患者的关系</label>
          <input
            type="text"
            name="relationshipWithPatientOthers"
            value={formData.relationshipWithPatientOthers}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">送信</button>
      </form>
    </div>
  );
};

export default ApplicationForm;
