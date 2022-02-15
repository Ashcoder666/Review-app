import React,{useState} from 'react'
import reviews from './data'

const Review = () => {
    const [index,setIndex] = useState(0)
    const {name,job,image,review} = reviews[index]
    const prev = ()=>{
        if(index === 0){
            setIndex(4)
        }else{
            setIndex( index-1)
        }
    }

    const next = ()=>{
        if(index === 4){
            setIndex(0)
        }else{
            setIndex (index=>index+1)
        }
    }

  return (
    <div>
<h1>{name}</h1>
<h2>I'm {job}</h2>
<img src={image} alt={name} />
<p className='para'>{review}</p>
<div>
<button onClick={prev} > prev </button>
<button onClick={next} > next </button>

</div>
    </div>
  )
}

export default Review
