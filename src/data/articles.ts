const summaries = [
  {
    slug: 'nigeria-africa-trade-corridors',
    title: 'ASGC Convenes High-Level Dialogue on Nigeria–Africa Trade Corridors',
    category: 'Diplomacy',
    date: 'September 15, 2026',
    author: 'ASGC Communications',
    featured: true,
    img: 'https://images.unsplash.com/photo-1739285452644-3a2c009112fe?w=900&h=500&fit=crop&auto=format',
    excerpt: 'The Centre brought together senior officials, business leaders and scholars to examine new frameworks for intra-African trade facilitation and sustainable economic corridors across the continent.',
  },
  {
    slug: 'responsible-investment-west-africa',
    title: 'ASGC Publishes New Policy Brief on Responsible Investment Frameworks for West Africa',
    category: 'Policy',
    date: 'August 28, 2026',
    author: 'ASGC Research Unit',
    featured: false,
    img: 'https://images.unsplash.com/photo-1590274853856-f22d5ee3d228?w=600&h=400&fit=crop&auto=format',
    excerpt: 'A new ASGC research brief examines ethical investment standards and their application across the West African economic landscape.',
  },
  {
    slug: 'economic-diplomacy-training',
    title: 'ASGC Launches Economic Diplomacy Training Programme for Young Professionals',
    category: 'ASGC News',
    date: 'July 14, 2026',
    author: 'ASGC Communications',
    featured: false,
    img: 'https://images.unsplash.com/photo-1739298061740-5ed03045b280?w=600&h=400&fit=crop&auto=format',
    excerpt: 'Twenty-five emerging leaders from across Nigeria participated in the inaugural ASGC Economic Diplomacy Intensive, gaining skills in negotiation and international engagement.',
  },
  {
    slug: 'afcfta-inclusive-african-trade',
    title: 'Commentary: AfCFTA and the Path to Inclusive African Trade',
    category: 'Commentary',
    date: 'June 5, 2026',
    author: 'ASGC Policy Team',
    featured: false,
    img: 'https://images.unsplash.com/photo-1739298061707-cefee19941b7?w=600&h=400&fit=crop&auto=format',
    excerpt: 'The African Continental Free Trade Area holds significant promise, but realising its benefits requires sustained investment in trade facilitation, capacity building and institutional reform.',
  },
  {
    slug: 'nigeria-gulf-cooperation-forum',
    title: 'Nigeria–Gulf Cooperation Forum: Building New Economic Bridges',
    category: 'International Cooperation',
    date: 'May 20, 2026',
    author: 'ASGC Communications',
    featured: false,
    img: 'https://images.unsplash.com/photo-1633095975779-fd354aa0dc95?w=600&h=400&fit=crop&auto=format',
    excerpt: 'ASGC supported a dialogue between Nigerian government officials and Gulf Cooperation Council partners, exploring new frameworks for trade, investment and cultural exchange.',
  },
];

// Preview copy: replace these sections with approved editorial content before publication.
const bodies = [
  [
    { heading: 'Connecting markets through dialogue', paragraphs: [
      'Trade corridors are more than transport routes. They connect producers, logistics providers, public institutions and consumers across borders. The dialogue described in this story places those relationships at the centre of a wider conversation about economic cooperation.',
      'For businesses, a dependable corridor means being able to plan a shipment, understand the required documentation and reach buyers with confidence. Bringing policy and commercial perspectives together helps identify where those expectations meet practical obstacles.',
    ] },
    { heading: 'From infrastructure to everyday access', paragraphs: [
      'Physical infrastructure is only one part of the picture. Clear information, consistent border procedures and coordination between institutions also shape the experience of trading across markets. Smaller enterprises need these systems to be understandable and accessible.',
      'A useful framework considers the entire journey of a product: production, certification, transport, border clearance and delivery. Looking at the journey as a whole can reveal barriers that would otherwise remain hidden between institutional responsibilities.',
    ] },
    { heading: 'Keeping cooperation practical', paragraphs: [
      'Dialogue creates the most value when it helps different participants understand a shared problem. Public institutions can explain policy objectives, businesses can describe operational constraints, and researchers can identify questions that require further evidence.',
      'ASGC’s wider mandate connects diplomacy with inclusive trade and responsible investment. Readers interested in these themes can explore the Centre’s programme areas or contact the team about opportunities for engagement.',
    ] },
  ],
  [
    { heading: 'Investment with a wider purpose', paragraphs: [
      'Responsible investment asks how capital can support economic activity while taking account of people, communities and the environment. The policy theme introduced in this brief is relevant to both those seeking investment and those deciding where to allocate it.',
      'The discussion extends beyond the size of a financial commitment. It considers how a project is governed, how local stakeholders are heard and how its intended benefits can be assessed over time.',
    ] },
    { heading: 'Questions for institutions and investors', paragraphs: [
      'A practical assessment begins with clear questions. What development need does a project address? Who may be affected by its activities? What information will be available to communities, and how will concerns be raised and considered?',
      'Employment, environmental responsibility and transparency are useful areas for dialogue. Defining expectations early gives project partners a clearer basis for discussing responsibilities throughout the life of an investment.',
    ] },
    { heading: 'Building a shared understanding', paragraphs: [
      'Investors, public institutions and community organisations bring different perspectives to the same project. Research and policy dialogue can help make those perspectives visible and identify where further consultation is needed.',
      'Explore the Publications & Research section for the site’s publication catalogue. For enquiries about this sample brief or ASGC’s research themes, contact the Centre directly.',
    ] },
  ],
  [
    { heading: 'Preparing a new generation', paragraphs: [
      'Economic diplomacy brings international engagement into conversation with trade, investment and development. For emerging professionals, understanding these connections offers a foundation for working across institutions, sectors and national boundaries.',
      'The programme introduced in this story reflects ASGC’s focus on skills and leadership. Its themes connect professional development with the practical challenge of communicating clearly and building productive relationships.',
    ] },
    { heading: 'Learning through practical questions', paragraphs: [
      'Negotiation begins with preparation: understanding the issue, identifying interests and recognising the constraints facing others. A useful learning exercise asks participants to consider how different parties might work towards a shared outcome.',
      'International engagement also requires careful listening and an ability to explain complex ideas to varied audiences. Research, written communication and reflection on different perspectives complement the interpersonal side of diplomatic work.',
    ] },
    { heading: 'Continuing the learning journey', paragraphs: [
      'Professional development is an ongoing process. Mentorship and exchange can help emerging leaders connect classroom ideas with the decisions they encounter in their work.',
      'Readers can visit the Programmes section to explore ASGC’s skills and leadership focus. Contact the Centre for confirmed information about participation, schedules and future opportunities.',
    ] },
  ],
  [
    { heading: 'Looking beyond market access', paragraphs: [
      'Inclusive trade is concerned with who can participate in economic opportunity. This commentary considers the practical conditions that allow smaller enterprises to engage with markets beyond their immediate surroundings.',
      'A discussion of continental trade should therefore include the experience of the entrepreneur preparing a first cross-border sale. Information, business capabilities and reliable connections matter alongside the broader ambition of integration.',
    ] },
    { heading: 'Making participation possible', paragraphs: [
      'Businesses need understandable guidance on product requirements, logistics and the steps involved in reaching new buyers. The challenge is to turn complex processes into information that can support everyday decisions.',
      'Capacity building can provide space to examine these questions. Dialogue between business organisations, researchers and public institutions can also help identify where existing support falls short of what enterprises need.',
    ] },
    { heading: 'An agenda for sustained dialogue', paragraphs: [
      'Inclusive outcomes require attention to different starting points. The needs of a young entrepreneur, an established manufacturer and a small agricultural business will not always be the same.',
      'This perspective supports a continuing conversation about trade facilitation and skills. ASGC’s programme themes offer a starting point for readers interested in connecting policy discussion with practical participation.',
    ] },
  ],
  [
    { heading: 'A platform for economic exchange', paragraphs: [
      'International cooperation develops through relationships as well as formal frameworks. The forum introduced in this story brings attention to the role of dialogue in understanding economic priorities across regions.',
      'For Nigerian and Gulf partners, a useful conversation begins by listening to the objectives of participating institutions and businesses. Shared understanding can help participants identify subjects that deserve closer exploration.',
    ] },
    { heading: 'Connecting commercial and cultural perspectives', paragraphs: [
      'Trade and investment discussions benefit from a wider appreciation of institutional context and professional practice. Cultural exchange can support the relationships on which sustained engagement depends.',
      'An exploratory forum offers a setting for questions about market needs, partnership expectations and responsible investment. It is also a place to distinguish promising ideas from proposals that require additional research and consultation.',
    ] },
    { heading: 'Developing relationships over time', paragraphs: [
      'A meeting is a starting point for cooperation. Continued communication and a clear understanding of each participant’s responsibilities help turn initial interest into a more informed discussion.',
      'ASGC’s partnerships and events pages introduce related areas of work. Readers seeking confirmed details about participation or institutional collaboration can contact the Centre through the website.',
    ] },
  ],
];

export const articles = summaries.map((article, index) => {
  const sections = bodies[index].map((section, sectionIndex) => ({ ...section, id: `section-${sectionIndex + 1}` }));
  const words = [article.excerpt, ...sections.flatMap(section => section.paragraphs)].join(' ').split(/\s+/).length;
  return { ...article, sections, readingMinutes: Math.max(1, Math.ceil(words / 200)) };
});
