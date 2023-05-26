const webthemes = [
    {
        id: 0,
        title: 'Dawn 1',
        bg: `url(${process.env.PUBLIC_URL + "/assets/backgrounds/0.gif"})`,
        thumbnail: "/assets/thumbnails/0.gif",
        color: '#3342B1',   // primary color
        textColor: '#FFF',  // secondary color
        quote: '“Nothing’s perfect, the world’s not perfect, but it’s there for us, trying the best it can. That’s what makes it so beautiful.”',
        author: '- Roy Mustang, Fullmetal Alchemist'
    },
    {
        id: 1,
        title: 'Pastel Sky',
        bg: `url(${process.env.PUBLIC_URL + "/assets/backgrounds/1.gif"})`,
        thumbnail: "/assets/thumbnails/1.gif",
        color: '#8CA3C4',
        textColor: '#FFF',
        quote: '"A person grows up when he’s able to overcome hardships."',
        author: '- Jiraiya, Naruto'
    },
    {
        id: 2,
        title: 'Summer Sky',
        bg: `url(${process.env.PUBLIC_URL + "/assets/backgrounds/2.gif"})`,
        thumbnail: "/assets/thumbnails/2.gif",
        color: '#0F8DD6',
        textColor: '#FFF',
        quote: '"Always believe in yourself. Do this and no matter where you are, you will have nothing to fear."',
        author: '- Baron, The Cat Returns'
    },
    {
        id: 3,
        title: 'Rain 1',
        bg: `url(${process.env.PUBLIC_URL + "/assets/backgrounds/3.gif"})`,
        thumbnail: "/assets/thumbnails/3.gif",
        color: '#1986A2',
        textColor: '#FFF',
        quote: '“I do not fear this new challenge, rather like a true warrior I will rise to meet it.”',
        author: '- Vegeta, Dragon Ball Z'
    },
    {
        id: 4,
        title: 'Sunset 1',
        bg: `url(${process.env.PUBLIC_URL + "/assets/backgrounds/4.gif"})`,
        thumbnail: "/assets/thumbnails/4.gif",
        color: '#B544A4',
        textColor: '#FFF',
        quote: '“Don’t beg for it, earn it. Do it, and you’ll be rewarded.”',
        author: '- Renton Thurston, Eureka Seven'
    },
    {
        id: 5,
        title: 'Your Lie in April',
        bg: `url(${process.env.PUBLIC_URL + "/assets/backgrounds/5.gif"})`,
        thumbnail: "/assets/thumbnails/5.gif",
        color: '#E08D9D',
        textColor: '#FFF',
        quote: '"Maybe there’s only a dark road ahead. But you still have to believe and keep going. Believe that the stars will light your path, even a little bit."',
        author: '- Kaori Miyazono, Your Lie In April'
    },
    {
        id: 6,
        title: 'Sunset 2',
        bg: `url(${process.env.PUBLIC_URL + "/assets/backgrounds/6.gif"})`,
        thumbnail: "/assets/thumbnails/6.gif",
        color: '#E97587',
        textColor: '#FFF',
        quote: '"Even the mightiest warriors experience fears. What makes them a true warrior is the courage that they posses to overcome their fears."',
        author: '- Vegeta, Dragon Ball Z'
    },
    {
        id: 7,
        title: 'Totoro',
        bg: `url(${process.env.PUBLIC_URL + "/assets/backgrounds/7.gif"})`,
        thumbnail: "/assets/thumbnails/7.gif",
        color: '#299164',
        textColor: '#FFF',
        quote: ' "Try Laughing. Then Whatever Scares You Will Go Away."',
        author: '- Tatsuo, My Neighbor Totoro'
    },
    {
        id: 8,
        title: 'Summer Grass',
        bg: `url(${process.env.PUBLIC_URL + "/assets/backgrounds/8.gif"})`,
        thumbnail: "/assets/thumbnails/8.gif",
        color: '#09A068',
        textColor: '#FFF',
        quote: '"A real ninja is one who endures no matter what gets thrown at him … All you do need, is the guts to never give up."',
        author: '- Jiraiya, Naruto'
    },
    {
        id: 9,
        title: 'Wind Chime 1',
        bg: `url(${process.env.PUBLIC_URL + "/assets/backgrounds/9.gif"})`,
        thumbnail: "/assets/thumbnails/9.gif",
        color: '#33BBFF',
        textColor: '#FFF',
        quote: '"You’ll stumble many times in the future, but when you do, each time you’ll have more strength to bounce back."',
        author: '- Nobita, Doraemon'
    },
    {
        id: 10,
        title: 'Surfing',
        bg: `url(${process.env.PUBLIC_URL + "/assets/backgrounds/10.gif"})`,
        thumbnail: "/assets/thumbnails/10.gif",
        color: '#C3C3ED',
        textColor: '#FFF',
        quote: '"No matter how hard or impossible it is, never lose sight of your goal."',
        author: '- Monkey D. Luffy, One Piece'
    },
    {
        id: 11,
        title: 'Waves',
        bg: `url(${process.env.PUBLIC_URL + "/assets/backgrounds/11.gif"})`,
        thumbnail: "/assets/thumbnails/11.gif",
        color: '#75CBE7',
        textColor: '#0190D5',
        quote: '"To do my best, put in effort, and work together to make miracles. It made me think that even I could do it and that I could change from the current me."',
        author: '- Chika Takami, Love Live! Sunshine!!'
    },
    {
        id: 12,
        title: 'Kimi no Na wa',
        bg: `url(${process.env.PUBLIC_URL + "/assets/backgrounds/12.gif"})`,
        thumbnail: "/assets/thumbnails/12.gif",
        color: '#74549C',
        textColor: '#FFF',
        quote: '"Human beings are strong because we can change ourselves."',
        author: '- Saitama, One Punch Man'
    },
    {
        id: 13,
        title: 'Wind Chime 2',
        bg: `url(${process.env.PUBLIC_URL + "/assets/backgrounds/13.gif"})`,
        thumbnail: "/assets/thumbnails/13.gif",
        color: '#ABC7D6',
        textColor: '#FFF',
        quote: '“Life is not a game of luck. If you wanna win, work hard.”',
        author: '- Sora, No Game No Life'
    },
    {
        id: 14,
        title: 'Sakura 1',
        bg: `url(${process.env.PUBLIC_URL + "/assets/backgrounds/14.gif"})`,
        thumbnail: "/assets/thumbnails/14.gif",
        color: '#E090C1',
        textColor: '#FFF',
        quote: '"Even if no one believes in you, stick out your best and scream your defiance!"',
        author: '- Rukia Kuchiki, Bleach'
    },
    {
        id: 15,
        title: 'Hanabi',
        bg: `url(${process.env.PUBLIC_URL + "/assets/backgrounds/15.gif"})`,
        thumbnail: "/assets/thumbnails/15.gif",
        color: '#3A8CA1',
        textColor: '#FFF',
        quote: '"We are all like fireworks: we climb, we shine and always go our separate ways. Let’s not disappear like a firework and continue to shine forever"',
        author: '- Hitsugaya Toshiro, Bleach'
    },
    {
        id: 16,
        title: 'Dawn 2',
        bg: `url(${process.env.PUBLIC_URL + "/assets/backgrounds/16.gif"})`,
        thumbnail: "/assets/thumbnails/16.gif",
        color: '#5D6BD3',
        textColor: '#FFF',
        quote: '“Courage is a word that gives you the strength to do what’s right.”',
        author: '- Ran Mouri, Detective Conan'
    },
    {
        id: 17,
        title: 'Fireflies',
        bg: `url(${process.env.PUBLIC_URL + "/assets/backgrounds/17.gif"})`,
        thumbnail: "/assets/thumbnails/17.gif",
        color: '#446A9B',
        textColor: '#FFF',
        quote: '"Now, let\'s see a firefly show!"',
        author: '- Seita, Grave of the Fireflies'
    },
    {
        id: 18,
        title: 'Galaxy',
        bg: `url(${process.env.PUBLIC_URL + "/assets/backgrounds/18.gif"})`,
        thumbnail: "/assets/thumbnails/18.gif",
        color: '#6030A8',
        textColor: '#FFF',
        quote: '“Don’t worry about what other people think. Hold your head up high and plunge forward.”',
        author: '- Izuku Midoriya, My Hero Academia'
    },
    {
        id: 19,
        title: 'Sakura 2',
        bg: `url(${process.env.PUBLIC_URL + "/assets/backgrounds/19.gif"})`,
        thumbnail: "/assets/thumbnails/19.gif",
        color: '#E7A7C5',
        textColor: '#FFF',
        quote: '"If you’re brave and courageous and never quit you can come out a winner, just like me."',
        author: '- Brock, Pokemon'
    },
    {
        id: 20,
        title: 'Love Live!',
        bg: `url(${process.env.PUBLIC_URL + "/assets/backgrounds/20.gif"})`,
        thumbnail: "/assets/thumbnails/20.gif",
        color: '#EBA9D4',
        textColor: '#8C6C98',
        quote: '"As long as we\'ve got the determination, we can do anything!"',
        author: '- Honoka Kousaka, Love Live! School Idol Project'
    },
    {
        id: 21,
        title: 'Sakura 3',
        bg: `url(${process.env.PUBLIC_URL + "/assets/backgrounds/21.gif"})`,
        thumbnail: "/assets/thumbnails/21.gif",
        color: '#DAB0D3',
        textColor: '#8C6C98',
        quote: '"If we give up before we try, then nothing is going to happen."',
        author: '- Eli Ayase, Love Live! School Idol Project'
    },
    {
        id: 22,
        title: 'Sunset 3',
        bg: `url(${process.env.PUBLIC_URL + "/assets/backgrounds/22.gif"})`,
        thumbnail: "/assets/thumbnails/22.gif",
        color: '#DB6395',
        textColor: '#FFF',
        quote: '"The moment you think of giving up, think of the reason why you held on so long."',
        author: '- Natsu Dragneel, Fairy Tail'
    },
    {
        id: 23,
        title: 'Castle',
        bg: `url(${process.env.PUBLIC_URL + "/assets/backgrounds/23.gif"})`,
        thumbnail: "/assets/thumbnails/23.gif",
        color: '#989F5C',
        textColor: '#192700',
        quote: '“I refuse to let my fear control me anymore.”',
        author: '- Maka Albarn, Soul Eater'
    },
    {
        id: 24,
        title: 'Sakura 4',
        bg: `url(${process.env.PUBLIC_URL + "/assets/backgrounds/24.gif"})`,
        thumbnail: "/assets/thumbnails/24.gif",
        color: '#E6A8B1',
        textColor: '#C7587B',
        quote: '"Believe in your own power."',
        author: '- Mikasa Ackerman, Attack on Titan'
    },
    {
        id: 25,
        title: 'The Wind Rises',
        bg: `url(${process.env.PUBLIC_URL + "/assets/backgrounds/25.gif"})`,
        thumbnail: "/assets/thumbnails/25.gif",
        color: '#24A6B7',
        textColor: '#FFF',
        quote: '"Inspiration unlocks the future."',
        author: '- Caproni, The Wind Rises'
    },
    {
        id: 26,
        title: 'Mori',
        bg: `url(${process.env.PUBLIC_URL + "/assets/backgrounds/26.gif"})`,
        thumbnail: "/assets/thumbnails/26.gif",
        color: '#4EA630',
        textColor: '#FFF',
        quote: '"If you don’t like your destiny, don’t accept it. Instead have the courage to change it the way you want it to be."',
        author: '- Naruto Uzumaki, Naruto'
    },
    {
        id: 27,
        title: 'Tokyo',
        bg: `url(${process.env.PUBLIC_URL + "/assets/backgrounds/27.gif"})`,
        thumbnail: "/assets/thumbnails/27.gif",
        color: '#4B6DC2',
        textColor: '#FFF',
        quote: '"A future is something that you make yourself. You have to believe in it."',
        author: '- Sailor Mercury, Sailor Moon'
    },
    {
        id: 28,
        title: 'Moon Kingdom',
        bg: `url(${process.env.PUBLIC_URL + "/assets/backgrounds/28.gif"})`,
        thumbnail: "/assets/thumbnails/28.gif",
        color: '#719FAB',
        textColor: '#FFF',
        quote: '"Believe in yourself and nothing can stop you."',
        author: '- Sailor Venus, Sailor Moon'
    },
    {
        id: 29,
        title: 'Garden of Words',
        bg: `url(${process.env.PUBLIC_URL + "/assets/backgrounds/29.gif"})`,
        thumbnail: "/assets/thumbnails/29.gif",
        color: '#228E7B',
        textColor: '#E4FFB8',
        quote: '“I realize now, I was learning how to walk as well. I haven’t mastered the steps, I fall too. But I’m on my path, my path...',
        author: '- Makoto Shinkai, The Garden of Words'
    },
    {
        id: 30,
        title: 'Lantern Rite',
        bg: `url(${process.env.PUBLIC_URL + "/assets/backgrounds/30.gif"})`,
        thumbnail: "/assets/thumbnails/30.gif",
        color: '#5F2083',
        textColor: '#FFF',
        quote: '"Yesterday’s experiences make me stronger today."',
        author: '- Keqing, Genshin Impact'
    },
    {
        id: 31,
        title: 'Sunset 4',
        bg: `url(${process.env.PUBLIC_URL + "/assets/backgrounds/31.gif"})`,
        thumbnail: "/assets/thumbnails/31.gif",
        color: '#E87B88',
        textColor: '#FFF',
        quote: '"When you don’t know what to do, just take the first step. The rest will figure itself out naturally."',
        author: '- Beidou, Genshin Impact'
    },
    {
        id: 32,
        title: 'Ocean',
        bg: `url(${process.env.PUBLIC_URL + "/assets/backgrounds/32.gif"})`,
        thumbnail: "/assets/thumbnails/32.gif",
        color: '#45bbed',
        textColor: '#FFF',
        quote: '"When your heart is set on something, you get closer to your goal with each passing day."',
        author: '- Keqing, Genshin Impact'
    },
];

export default webthemes;