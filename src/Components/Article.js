import React from 'react'
import table from '../asset/images/table.png'
import '../styles/Article.css'

const Article = () => {
  return (
    <article className='article'>
        <div className="aside">
            <h1>Relax, You're Home!</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint perferendis sit libero deleniti nesciunt officiis  nostrum quisquam  totam et explicabo?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, est velit magnam similique possimus laborum  impedit tenetur  iusto harum reprehenderit?</p> <br />
            <button>Sign Up</button>
        </div>
        <div className="picture">
            <img src={table} alt="table image" />
            <div className="circle"></div>
        </div>
    </article>
  )
}

export default Article