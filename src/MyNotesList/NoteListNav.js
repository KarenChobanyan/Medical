export default function ListNav({ text,dispatchFn,style }) {
    
    return (
        <div onClick={dispatchFn}  className={style} key={Math.random()}>{text}</div>
    )
}