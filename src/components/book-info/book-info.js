import React from 'react'
import BookLink from '../book-link/book-link'


const BookInfo = (props)=>{
    return(
        <>
            <div className="columns book-container-ft">
                
                <div className="column">
                    <div className="bookImgContainer">
                        <img alt="main-book" src={props.data.imgSrc} />
                    </div>
                </div>
                
                <div className="column" id={props.data.id}>
                    <section className="contentBook">
                        <h1>
                            {props.data.title}
                        </h1>

                        <p className="sub-heading">
                            {props.data.spanFirst}
                        </p>
                        
                        <span>
                            {props.data.spanTitle}
                        </span> 

                        <div className="content-body" 
                             dangerouslySetInnerHTML={{__html: `${props.data.content}`}} />
                    </section>

                    <BookLink
                        data={{
                            ebooks:{
                                stratton : 'https://www.stratton-press.com/books/key-west-interlude/',
                                barnes: 'https://www.barnesandnoble.com/w/key-west-interlude-lois-richman/1131275986?ean=9781643454658',
                                amazon :'https://www.amazon.com/Key-West-Interlude-Lois-Richman-ebook/dp/B07QMP67HG/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=&sr=%22', 
                            },
                            paperback:{
                                amazon:'https://www.amazon.com/Key-West-Interlude-Lois-Richman/dp/1643454633/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr=%26amp%3B%2334%3B',
                                barnes:'https://www.barnesandnoble.com/w/key-west-interlude-lois-richman/1131275986?ean=9781643454634',
                                booksamillion:'https://www.booksamillion.com/p/Key-West-Interlude/Lois-Richman/9781643454641?id=7714171848832',
                            },
                            reviews:{},
                            isNonfront:true,
                        }}
                    />

                </div>	
            </div>
        </>
    )
} 

export default BookInfo;