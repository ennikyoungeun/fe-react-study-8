import'./NewsBlog.css';
import { useState } from 'react';

function Newsblog01() {
    let title ='React Study'; //useState('React Study);
        
        let [news, setNews] = useState( ['어제의 뉴스','오늘의 뉴스','내일의 뉴스'] );

        // 2. 각 뉴스별 좋아요 개수를 저장할 배열 상태 선언 (초기값은 모두 0)
        let [likeCounts, setLikeCounts] = useState([0, 0, 0]);

    return (
        <div>
            <div className='black-nav'>
                <h3>Blog Header</h3>
                {/* <div>React Study</div> */}
                <div style={{color:"orange",fontSize:"20px"}}>{title}</div>
            </div>

        {/* map 함수를 이용해 배열 데이터 기준 반복 생성 */}

            {news.map((item, index) => {
                return (
                    <div className="post-list" key={index}>
                        <h4>
                            {item}{' '}
                            <span onClick={(event) => {
                                event.stopPropagation();
                                    // 중요: 리액트 배열 상태 수정을 위한 깊은복사
                                    // let temp = [...textArr]; //깊은복사
                                    // temp.push('야식');
                                    // setTextArr(temp); //렌더링 발생 조건
                                    // style={{ cursor: 'pointer' }}
                                    let temp = [...likeCounts];
                                    temp[index] = temp[index] + 1; // 클릭된 인덱스의 값만 증가
                                    setLikeCounts(temp);
                                }}> ❤</span>
                            {likeCounts[index]}
                        </h4>
                        <p>내용무</p>
                    </div>
                );
            })}
        </div>
    );
}
    
export default Newsblog01;
