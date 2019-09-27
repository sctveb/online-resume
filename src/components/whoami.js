import React, { Component } from 'react';

import "../scss/whoami.scss";

class WhoAmI extends Component {
    render() {
        return (
            <React.Fragment>
                <section id="whoami">
                    <div className="post">
                        <div className="container">
                            <h1>Who Am I</h1>
                            <div className="title-image">
                                <img src="./img/test_profile.png" alt="title-image" />
                            </div>
                            <div className="title-index">
                                이름: 주현준
                                생년월일:
                                전화번호/ 이메일:
                        </div>
                        <div className="education">
                            <table>
                                <tbody>
                                <tr>
                                    <td>2007.03 ~ 2010.02</td>
                                    <td>의정부고등학교</td>
                                </tr>
                                <tr>
                                    <td>2011.03 ~ 2020.02</td>
                                    <td>동국대학교</td>
                                </tr>
                                <tr>
                                    <td>2018.05 ~ 2018.12</td>
                                    <td>딥러닝 기반의 데이터 분석 전문가 과정 수료</td>
                                </tr>
                                </tbody>
                                
                            </table>
                            {/* <ul>
                                <li>2007.03 ~ 2010.02 : 의정부고등학교</li>
                                <li>2011.03 ~ 2020.02 : 동국대학교</li>
                                <li>2018.05 ~ 2018.12 : 딥러닝 기반의 데이터 분석 전문가 과정 수료</li>
                            </ul> */}
                        </div>
                        <div className="skill1">
                            <ul>
                                <li>HTML, CSS(SCSS)를 통한 기본적인 컨텐츠 및 레이아웃 구성이 가능</li>
                                <li>JavaScript(ES6+)를 이용해 웹 어플리케이션 풀스택 개발이 가능</li>
                                <li>EC2, S3, RDS, DynamoDB, EBS 등의 서비스를 통해 클라우드 환경에서의 웹 어플리케이션 개발 가능</li>
                                <li>Python 기반의 라이브러리를 활용한 기본적인 데이터 분석</li>
                            </ul>
                        </div>
                        <div className="skill2">HTML, CSS, JavaScript, Python, React, Vue, Express, MySql, MongoDB, AWS</div>                           
                    </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default WhoAmI;