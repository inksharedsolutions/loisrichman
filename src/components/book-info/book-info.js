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
                                stratton:'https://www.stratton-press.com/books/the-ultimate-victory-fulfilling-destiny-through-freedom-healing-and-wholeness/',
                                barnes:'https://www.barnesandnoble.com/w/the-ultimate-victory-penny-mccoy/1134150168?ean=9781643457697',
                                amazon :'https://www.amazon.com/Ultimate-Victory-Fulfilling-Destiny-Wholeness-ebook/dp/B07Z8H31ZJ/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=1596195985&sr=8-1', 
                            },
                            paperback:{
                                amazon:'https://www.amazon.com/Penny-McCoy/dp/1643457683/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1596195985&sr=8-1',
                                barnes:'https://www.barnesandnoble.com/w/the-ultimate-victory-penny-mccoy/1134150168?ean=9781643457680',
                                booksamillion:'https://www.booksamillion.com/p/Ultimate-Victory/Penny-McCoy/9781643457680?id=7954811514842',
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