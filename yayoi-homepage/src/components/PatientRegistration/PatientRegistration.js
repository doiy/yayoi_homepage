import React, { useState } from 'react';
import './PatientRegistration.css'

const PatientRegistration = () => {
  // stateを定義
  const [formData, setFormData] = useState({
    name: '',
    pinyin: '',
    language: '',
    selectedOption: {
      useLanguage: false,
      sex: false,
      yourExpectation: false,
      hasStartedTreatment : false,
    },
    birth: '',
    address: '',
    landline: '',
    mobile: '',
    postCode: '',

    gender: 'male', // デフォルトで男性を選択
    currentMedicalInstitution: '',
    diagnosedDisease: '',
    yourExpectation: '',
    hasStartedTreatment : '',
    yourThoughts: '',
    centerRecordSection: '',
  });

  // テキストボックスの変更ハンドラー
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // プルダウンの変更ハンドラー
  const handleSelectChange = (e) => {
    setFormData({
      ...formData,
      gender: e.target.value,
    });
  };

  const handleRadioChange = (group, value) => {
    setFormData({
      ...formData,
      selectedOption: {
        ...formData.selectedOption,
        [group]: value,
      },
    });
  };
  // フォームの送信ハンドラー
  const handleSubmit = (e) => {
    e.preventDefault();
    // フォームデータを使って必要な処理を行う（ここではコンソールに表示）
    console.log('Form data submitted:', formData);
  };

  const renderRadioOptions = (group, options) => {
    return options.map((option) => (
      <label key={option}>
        {option}
        <input
          type="radio"
          name={group}
          value={option}
          checked={formData.selectedOption[group] === option}
          onChange={() => handleRadioChange(group, option)}
        />
      </label>
    ));
  };

  return (
    <div className="my-form-container">
      <h2>东京国际医疗(肿瘤)中心 门诊登记卡</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>姓名:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>拼音:</label>
          <input
            type="text"
            name="pinyin"
            value={formData.pinyin}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>母语:</label>
          <input
            type="text"
            name="language"
            value={formData.language}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label>会使用的外语:</label>
          {renderRadioOptions('useLanguage', ['日语', '英语'])}
        </div>
        <div>
          <label>出生日期:</label>
          <input
            type="text"
            name="birth"
            value={formData.birth}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>性别:</label>
          {renderRadioOptions('sex', ['男', '女'])}
        </div>

        <div>
          <label>家庭地址:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>座机:</label>
          <input
            type="text"
            name="landline"
            value={formData.landline}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>手机:</label>
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>邮箱:</label>
          <input
            type="text"
            name="postCode"
            value={formData.postCode}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>您目前就诊的医院:</label>
          <input
            type="text"
            name="currentMedicalInstitution"
            value={formData.currentMedicalInstitution}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>被诊断的病名:</label>
          <input
            type="text"
            name="diagnosedDisease"
            value={formData.diagnosedDisease}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>诊断的日期:</label>
          <input
            type="text"
            name="diagnosisDate"
            value={formData.diagnosisDate}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>您的期望:</label>
          {renderRadioOptions('yourExpectation', ['本中心/日本医科大学附属医院接受治疗', '接受远程在线专家门诊','接受书面专家诊治','其他'])}
        </div>
        <div>
          <label>您是否已开始治疗:</label>
          {renderRadioOptions('hasStartedTreatment', ['手术', '化疗','放射性疗法','其他'])}
        </div>
        <div>
          <label>您的想法:</label>
          <input
            type="text"
            name="yourThoughts"
            value={formData.yourThoughts}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>本中心记录栏:</label>
          <input
            type="text"
            name="centerRecordSection"
            value={formData.centerRecordSection}
            onChange={handleInputChange}
          />
        </div>

        <button type="submit">送信</button>
      </form>
    </div>
  );
};

export default PatientRegistration;