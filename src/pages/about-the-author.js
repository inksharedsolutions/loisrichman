import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import AuthorImg from '../../static/author/main_author.png'

const ATB = (props)=>{
	
	return (
		<> 
		 	<Layout>
                 
		 		<Nav pathExt={props.path}/>
                 <Banner 
                 spanFirst={`About The`} 
                 contextHeading={`Author`}/>
                  
		 		<div className="container">
				    <section className="body-author-contents columns">
                         
                        <div className="heading-quote column">
                            <div className="author-image-container">
                                <img src={AuthorImg} />
                            </div>

                            <div className="heading-quote">
                                <h4>
                                    In order for your faith to work, you have to walk in Love. 
                                    IF YOU FOLLOW THESE 10 GUIDELINES, you’ll 
                                    receive more answers to your prayers, receive more
                                    money, receive your healing, receive more love,
                                    receive more power, receive more faith, and receive more
                                    of everything God wants you to have.
                                </h4>
                                
                                <span className="ata-span-fx">
                                    author quote
                                </span>
                            </div>
                        </div>

                        <article className="article-section column" id="author">
                            <p>
                                Lois Richman left Palm Beach, Florida and went
                                directly to Hollywood, California right after
                                graduation from high school where she was hired as
                                a columnist and west coast editor for various fan magazines. 
                                She also wrote articles for national women’s magazines 
                                before she finished her formal education at Cal State Northridge,
                                earning a B.A. in English Literature.
                            </p>

                            <p>
                                Teaching for the L.A. Unified School District, she taught
                                in gang schools (the basis for her soon-to-be completed third
                                novel in the Paulette Marshall Mystery Series, entitled L.A. Interlude.) 
                                Her year in Key West “to do my Ernest Hemingway thing” resulted in a novel 
                                entitled “Wanted First Mate” and the first draft for the trilogy, “Key West Interlude” 
                                (both available on Amazon.com.) Returning to Florida, she earned her Master’s Degree 
                                at F.A.U. As a professor at the college level for Keiser University, she established 
                                their ESL Department for the West Palm Beach campus where her students learned English 
                                and American skills. Her students were from such countries as China, South Korea, Europe,
                                and South America.
                            </p>

                            <p>
                                A serious interest in human nature and its journeys, her books capture the essence
                                of today’s society as told through her characters. The travails of Paulette Marshall
                                help the reader escape into her fast-paced, page-turning and intimate style, giving
                                a good read that will make a reader laugh or cry while becoming involved and excited
                                by their ongoing problems and resolutions. She is a swimmer; she gardens, reads, and
                                loves to bring her two rescues, Foxie and Pearlie, along wherever she may go. She is 
                                also a collector of movie memorabilia including a “Gone with the Wind” poster board, 
                                Disney art, and various dress sketches from “Suddenly Last Summer”, “Raintree County,” 
                                and “Boys Town”. She currently resides in Florida.
                            </p>

                            <p>
                                <span className="author-name">
                                    <span className="author-span-ft">Author |  Writer </span>
                                    <span className="ata-name">Lois Richman</span>
                                </span>
                            </p>
                        </article>

                    </section>
                </div>

		 	</Layout>
		</>
	)
}


export default ATB;