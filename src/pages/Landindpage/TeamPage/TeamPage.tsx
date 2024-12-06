import { Link } from 'react-router-dom'
import teamPhoto from '../../../assets/images/teamPhoto.jpg'
import Typography from '../../../components/Typography'
import { THE_TEAM_PATH_SCROLL } from '../../../config/PathForScroll'

const TeamPage = () => {
    return (
        <div id={THE_TEAM_PATH_SCROLL} className='container mx-auto mt-12 mb-20 flex flex-col'>
            <div className='flex flex-col'>
                <Typography size="large">
                    Startseite / Das Team
                </Typography>

                <Typography size="big" className='mt-10'>
                    <span className='border-b-2 border-primary pb-1'>
                        Das Team
                    </span>
                </Typography>

                <Typography size="normal" className='mt-4'>
                    Unser Erfolg basiert auf der Leidenschaft, dem Engagement und der Expertise unseres Teams. Auf der Goldenen Seiten vereinen wir vielfältige Erfahrungen, um innovative Lösungen zu schaffen,
                    die unsere Kunden begeistern. Gemeinsam setzen wir uns dafür ein, höchste Qualität und exzellenten Service zu bieten. Lernen Sie unser Team kennen und entdecken Sie, wer hinter den Kulissen dafür sorgt, dass jede Aufgabe mit Präzision und Hingabe
                    umgesetzt wird.
                </Typography>
            </div>

            <div className='theTeamBox mt-20 flex flex-col md:flex-row p-20 gap-8'>
                <div className='flex flex-col  w-3/5'>
                    <Typography size="normal">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna. Aenean velit odio, elementum in tempus ut, vehicula eu diam. Pellentesque rhoncus aliquam mattis.
                    </Typography>

                    <Typography size="small" className='mt-10'>
                        <span className='font-bold'>E-mail: </span>
                        max.mustermann@goldeneseiten.de
                    </Typography>

                    <Typography size="small">
                        <span className='font-bold'>Telefon: </span>
                        +49 11111 1112552
                    </Typography>

                    <div className='flex flex-row items-center mt-10 justify-between'>
                        <div>
                            <Typography size="big" className='font-bold'>
                                Max Mustermann
                            </Typography>
                        </div>
                        <div className='space-x-4 mt-2'>
                            <Link to="/">
                                <i className="ri-facebook-box-fill text-primary text-4xl" />
                            </Link>
                            <Link to="/">
                                <i className="ri-instagram-fill text-primary text-4xl" />
                            </Link>
                            <Link to="/">
                                <i className="ri-twitter-fill text-primary text-4xl" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className='w-2/5'>
                    <img src={teamPhoto} alt="Team" className='rounded-[20px] w-full h-auto object-cover' />
                </div>
            </div>

            <div className='theTeamBox mt-20 flex flex-col md:flex-row p-20 gap-8'>


                <div className='w-2/5'>
                    <img src={teamPhoto} alt="Team" className='rounded-[20px] w-full h-auto object-cover' />
                </div>

                <div className='flex flex-col  w-3/5'>
                    <Typography size="normal">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna. Aenean velit odio, elementum in tempus ut, vehicula eu diam. Pellentesque rhoncus aliquam mattis.
                    </Typography>

                    <Typography size="small" className='mt-10'>
                        <span className='font-bold'>E-mail: </span>
                        max.mustermann@goldeneseiten.de
                    </Typography>

                    <Typography size="small">
                        <span className='font-bold'>Telefon: </span>
                        +49 11111 1112552
                    </Typography>

                    <div className='flex flex-row items-center mt-10 justify-between'>
                        <div>
                            <Typography size="big" className='font-bold'>
                                John Doe
                            </Typography>
                        </div>
                        <div className='space-x-4 mt-2'>
                            <Link to="/">
                                <i className="ri-facebook-box-fill text-primary text-4xl" />
                            </Link>
                            <Link to="/">
                                <i className="ri-instagram-fill text-primary text-4xl" />
                            </Link>
                            <Link to="/">
                                <i className="ri-twitter-fill text-primary text-4xl" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className='theTeamBox mt-20 flex flex-col md:flex-row p-20 gap-8'>
                <div className='flex flex-col  w-3/5'>
                    <Typography size="normal">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna. Aenean velit odio, elementum in tempus ut, vehicula eu diam. Pellentesque rhoncus aliquam mattis.
                    </Typography>

                    <Typography size="small" className='mt-10'>
                        <span className='font-bold'>E-mail: </span>
                        max.mustermann@goldeneseiten.de
                    </Typography>

                    <Typography size="small">
                        <span className='font-bold'>Telefon: </span>
                        +49 11111 1112552
                    </Typography>

                    <div className='flex flex-row items-center mt-10 justify-between'>
                        <div>
                            <Typography size="big" className='font-bold'>
                                Verona Blair
                            </Typography>
                        </div>
                        <div className='space-x-4 mt-2'>
                            <Link to="/">
                                <i className="ri-facebook-box-fill text-primary text-4xl" />
                            </Link>
                            <Link to="/">
                                <i className="ri-instagram-fill text-primary text-4xl" />
                            </Link>
                            <Link to="/">
                                <i className="ri-twitter-fill text-primary text-4xl" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className='w-2/5'>
                    <img src={teamPhoto} alt="Team" className='rounded-[20px] w-full h-auto object-cover' />
                </div>
            </div>
        </div>
    )
}

export default TeamPage
