import React from 'react';
import './Header.css'
import Button from '@mui/material/Button';
import { styled } from "@mui/system";

const Header = () => {
  return (
    <header>
        <div className="logo">
            <h3>东京国际医疗(肿瘤)中心</h3>
            <div className="Button">
                <Button variant="contained" size="medium">患者登録はこちら</Button>
            </div>

        </div>   
        <div className="items">
            <nav>   
                <ul>
                    <li>
                        <a href="#">About us</a>
                    </li>
                    <li>
                        <a href="#">セカンドオピニオンオンライン診療</a>
                    </li>
                    <li>
                        <a href="doctor_introduction">医師紹介</a>
                    </li>
                    <li>
                        <a href="#">综合内科门诊</a>
                    </li>
                    <li>
                        <a href="#">PET健康診断</a>
                    </li>
                    <li>
                        <a href="#">Q&A</a>
                    </li>
                    <li>
                        <a href="#">国際交流</a>
                    </li>
                    <li>
                        <a href="#">業務提携</a>
                    </li>    
                    <li>
                        <a href="#">アクセス</a>
                    </li>
                    <li>
                        <a href="#">お問合せ</a>
                    </li>
                </ul>
            </nav>
        </div>

    </header>
  );
};

export default Header;