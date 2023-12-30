

import './Bulletin.css'

const Bulletin = () => {

    const posts = [
        '11111',
        'testst2',
        'tetetet3',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        '13'
    ]

    return(
        <div className='bulletin'>
            <div className='bulletin-title'>SWEET BIRD 게시판</div>
            <div className='bulletin-posts'>
                <div className='bulletin-posts-uploaded'>
                    <div className='bulletin-posts-uploaded-title'>test post</div>
                    <div className='bulletin-posts-uploaded-author-time'>writer 2023-12-28 15:21</div>
                </div>
                <div className='bulletin-posts-uploaded'>
                    <div className='bulletin-posts-uploaded-title'>test post</div>
                    <div className='bulletin-posts-uploaded-author-time'>writer 2023-12-28 15:21</div>
                </div>
            </div>
            <div className='bulletin-move-page'>
                <div>previous</div>
                <div>1</div>
                <div>2</div>
                <div>next</div>
            </div>
        </div>
    )
}

export default Bulletin