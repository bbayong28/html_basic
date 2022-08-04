const Section03 = () => { 
    return (
        <section className="Business02 basicSection">
        <h2><span>OUR</span> BUSINESS</h2>
        <p>다양한 영역을 소개합니다.</p>
        <div className="container">
            <div className="left">
                <figure>
                    <img src="./img/hd01.jpg" alt="" />
                </figure>
            </div>
            <div className="right">
                <h3>심플하지만 다 갖춘 에이치컴퍼니</h3>
                <p>로또에 당첨된다면 얼마나 좋을까...</p>

                <ul className="dotList">
                    <li>심플하지만 다 갖춘 에이치컴퍼니 </li>
                    <li>14억이 생기면 무엇을 하면 좋을까...</li>
                    <li>심플하지만 다 갖춘 에이치컴퍼니</li>
                    <li>심플하지만 다 갖춘 에이치컴퍼니</li>
                    <li>로또에 당첨된다면 얼마나 좋을까...</li>
                </ul>

                <div className="bottom">
                    심플하지만 다 갖춘 에이치컴퍼니<br />
                    14억이 생기면 무엇을 하면 좋을까...
                </div>
            </div>
        </div>
        <div className="inner">
            <h3>심플하지만 다 갖춘 에이치컴퍼니</h3>
            <ul className="row">
                <li data-num="01">심플하지만 다 갖춘 에이치컴퍼니 </li>
                <li data-num="02">14억이 생기면 무엇을 하면 좋을까...</li>
                <li data-num="03">심플하지만 다 갖춘 에이치컴퍼니</li>
                <li data-num="04">로또에 당첨된다면 얼마나 좋을까...</li>
            </ul>
        </div>
    </section>
    )
}

export default Section03;