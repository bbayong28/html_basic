const Section04 = () => { 
    return (
        <section className="About02 basicSection">
            <h2><span>CEO'S </span>GREETINHS</h2>{/*h2안에 인라인만 들어가야함 */}
            <p>항상 새로운 에이치컴퍼니</p>
            <div className="inner">
                <div className="top">
                    <figure>
                        <img src="./img/main01.jpg" alt="" />{/* 인덱스기준으로해서 경로가 ./ 임 */}
                    </figure>
                </div>
                <div className="left">
                    <p className="tit">
                    웹서비스의<span className="mainColor">새로운 미래를</span><br />
                    <span className="mainColor">에이치컴퍼니</span>가 만들어 가겠습니다.
                    </p>

                </div>
                <div className="right">
                    <div className="des">
                <p className="tit">
                    웹서비스의<span className="mainColor">새로운 미래를</span><br />
                    <span className="mainColor">에이치컴퍼니</span>가 만들어 가겠습니다.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br />Voluptas est saepe ducimus
                    repellendus repudiandae totam quisquam fugit tempore expedita excepturi.
                </p>

                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br />
                    Iste debitis voluptas ex. Asperiores, id eius. Blanditiis, temporibus dolorum veritatis atque<br />
                    necessitatibus ducimus deserunt corrupti? Commodi!
                </p>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />
                    Assumenda ipsum expedita distinctio facere
                    molestias placeat.
                </p>

                <p>에이치컴퍼니 임직원 일동</p>
                    </div>
                </div>
            </div>

            <div className="inner pd15">
                <h3>주요현황</h3>
                <div className="responsive_table">
                    <table className="table">
                        <tbody>
                            <tr>
                                <th>주 소</th>
                                <td>부산시 동래구 사직동 1234-56 쌍둥이 돼지국밥 옆</td>
                            </tr>
                            <tr>
                                <th>전화번호</th>
                                <td>051-783-2371</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>        
    )
}

export default Section04;