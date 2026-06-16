

function Boxes({ onAdd }) {
    return (
        <div>
            <button onClick={() => onAdd('front', 'red')}>앞빨간박스추가</button>
            <button onClick={() => onAdd('front', 'blue')}>앞파란박스추가</button>
            <button onClick={() => onAdd('front', 'green')}>앞초록박스추가</button>

            <button onClick={() => onAdd('back', 'red')}>뒤빨간박스추가</button>
            <button onClick={() => onAdd('back', 'blue')}>뒤파란박스추가</button>
            <button onClick={() => onAdd('back', 'green')}>뒤초록박스추가</button>
        </div>
    );
}

export default Boxes;




