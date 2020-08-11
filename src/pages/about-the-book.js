import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import BookInfo from '../components/book-info/book-info'
import { DiscussionEmbed } from "disqus-react"
import FrontBook from '../../static/books/book_01.png'
import SecondBook from '../../static/books/book_02.png'

const ATB = (props)=>{


    const slug =(props.location.href);
    
	const disqusConfig = {
	  shortname: 'lois-richman',
	  config: { identifier:  12, slug}
    }
    

	return (
		<>
		 	<Layout>
		 		<Nav pathExt={props.path}/>
                 
		 		<Banner
                    spanFirst={`About The`}
                    contextHeading={`Book`}
                />

                <main className="wrapperMain">
                    <div 
                        className="container"
                        id="book-containers" >

                            <BookInfo
                                data={{
                                    title:`Key West Interlude`,
                                    spanFirst: `paulette marshall mnysteries series`,
                                    imgSrc: FrontBook,
                                    id:'the_gifted_one',
                                    content:
                                    `
                                    <p>
                                        Captain Maxwell Hernandez has been found dead next to his fishing vessel,
                                        The Ramblin’ Rose, facedown in the waters at the Bahia Honda Inlet near Key West, Florida.
                                    </p> 
                                    <p>
                                        Meanwhile, Paulette Marshall has left her mansion on top of Mulholland Drive
                                        in the very rich and prestigious Bel Air, California, neighborhood after 
                                        winning the property during a very contentious divorce she did not want.
                                        Arriving at Key West, she is hired by the local high school as a counselor.
                                    </p>

                                    <p>
                                        Her student Ariel Costa is the victim of sexual abuse by the captain,
                                        who had been her mentor and provider as well as a father figure.
                                        Ariel was aboard that ill-fated trip to Islamorada and is considered
                                        a person of interest to local authorities. Pregnant with Max’s child
                                        and only an alcoholic mother and absent father to turn to, who can Ariel trust now?
                                    </p>

                                    <p>
                                        Further, there is the issue of $300,000 missing from the safe of Hernandez’s
                                        fishing boat. If Ariel tells authorities about the one envelope she did take,
                                        feeling assured Hernandez wanted her to have the money for a new start,
                                        she could go to jail and be charged with stealing the entire amount.
                                    </p>

                                    <p>
                                        This plays right into the plans of Susanna, the captain’s youngest daughter,
                                        who is hot to recover the $300,000 so her drug dealer husband will take her back.
                                    </p>

                                    <p>
                                        In between all the action, Key West turns out to be the perfect getaway
                                        for Paulette as she works through no longer being “someone’s daughter,
                                        wife, or mother.” As a woman finally able to seek her own road, Paulette
                                        hopes she can do the same for Ariel.
                                    </p>
                                    
                                    `,

                                    ebooks:{
                                        stratton : 'https://www.stratton-press.com/books/key-west-interlude/',
                                        barnes: 'https://www.barnesandnoble.com/w/key-west-interlude-lois-richman/1131275986?ean=9781643454658',
                                        amazon :'https://www.amazon.com/Key-West-Interlude-Lois-Richman-ebook/dp/B07QMP67HG/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=&sr=%22', 
                                    },
                                    paperback:{
                                        amazon:'https://www.amazon.com/Key-West-Interlude-Lois-Richman/dp/1643454633/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr=%26amp%3B%2334%3B',
                                        barnes:'https://www.barnesandnoble.com/w/key-west-interlude-lois-richman/1131275986?ean=9781643454634',
                                        booksamillion:'https://www.booksamillion.com/p/Key-West-Interlude/Lois-Richman/9781643454641?id=7714171848832',
                                    }
                                }} 
                            />


            
                            <div className="commentSection" >
                                <div id="disqus_thread">
                                    <DiscussionEmbed {...disqusConfig} />
                                </div>
                            </div>
                    </div>	
                </main>


		 	</Layout>
		</>
	)
}


export default ATB;