const Section01 = () => { 
    return (
        <section className="about basicSection">
        <h2><span className="mainColor">CEO'S</span> GREETIONGS</h2>
        <p>새로운 미래를 열어가는 에이치컴퍼니</p>
        <div className="container">
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
            <figure>
                <img src="./img/hd03.jpg" alt=""></img>
            </figure>
        </div>
        <div className="inner">
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

export default Section01;