import { Article } from '../types';

/**
 * Curated news articles covering District Shangla, regional affairs,
 * Pakistan national economy, sports, and technology.
 *
 * - Articles added for TODAY (20 Sep 2026) have 2026-09-20 timestamps.
 * - Previous articles retain their respective original dates (19, 18, 17, 16, 15 Sep 2026).
 */

export const initialNewsArticles: Article[] = [
  // --- ARTICLES FOR TODAY (20 Sep 2026) ---
  {
    id: 'art-robotics-gold',
    title: 'Shangla Students Clinch Gold at National STEM & Robotics Olympiad in Islamabad',
    content: `ISLAMABAD — A talented team of four high-school innovators representing Government Higher Secondary School Alpuri and Besham has won first place at the National STEM & Robotics Olympiad held at the Pakistan Museum of Natural History in Islamabad.\n\nThe students designed an autonomous, low-cost early warning landslide detection system that utilizes micro-vibration sensors and solar-powered radio frequency transmitters to alert downhill mountain villages before slope failure occurs.\n\nThe federal science minister awarded the team cash scholarships and advanced robotics training kits, commending the ingenuity of youth from northern mountainous terrains in developing practical solutions for real-world environmental challenges.`,
    author: 'Education Desk',
    category: 'Education',
    createdAt: '2026-09-20T07:20:00Z',
    imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1000'
  },
  {
    id: 'art-mobile-health-clinics',
    title: 'All-Terrain 24/7 Mobile Health Clinics Deployed for Remote Valleys of District Shangla',
    content: `ALPURI — The Shangla District Health Authority, in coordination with provincial disaster relief and philanthropic partners, has deployed three custom-built 4x4 all-terrain mobile health clinics to provide round-the-clock emergency medical assistance across isolated settlements in Martung, Chakesar, and Upper Kana.\n\nEach mobile medical unit is equipped with portable digital ultrasound equipment, 12-lead ECG telemetry, maternal care kits, and emergency oxygen supplies, accompanied by a dedicated medical officer and female healthcare technician.\n\nThe initiative addresses long-standing transit hurdles for expectant mothers and elderly citizens residing in snowbound and steep hillside valleys, ensuring critical primary care and diagnostic testing directly at village doorsteps without fee.`,
    author: 'Health Desk',
    category: 'Shangla',
    createdAt: '2026-09-20T07:05:00Z',
    imageUrl: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=1000'
  },
  {
    id: 'art-honey-reforestation',
    title: 'Shangla Launches Community Apiculture & Pine Forest Restoration Drive in Lilownai',
    content: `LILOWNAI, District Shangla — The Khyber Pakhtunkhwa Forestry Department has inaugurated a sustainable community apiculture (bee-farming) and cedar-pine reforestation initiative across Lilownai and Yakhtangay valleys.\n\nUnder the program, 120 local youth and smallholder farmers received modern standardized bee-boxes, protective gear, and certified training in harvesting premium unadulterated Sidr and Acacia mountain honey, an export-grade commodity in high demand across national markets.\n\nSimultaneously, community forest guards commenced the plantation of 100,000 indigenous deodar and pine saplings along vulnerable slopes to curb erosion, foster biodiversity, and build sustainable green livelihoods for mountain households.`,
    author: 'Environment Desk',
    category: 'Environment',
    createdAt: '2026-09-20T06:50:00Z',
    imageUrl: 'https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=1000'
  },
  {
    id: 'art-shangla-highway',
    title: 'Shangla-Besham Highway Upgradation Project Approved to Boost Regional Trade and Tourism',
    content: `BESHAM, District Shangla — The Khyber Pakhtunkhwa Communication and Works Department has formally sanctioned an emergency infrastructure development package to widen and modernize the critical road corridor connecting Alpuri, Lilownai, and Besham directly with the Karakoram Highway (KKH).\n\nThe 42-kilometer mountain bypass project incorporates reinforced rockfall protection netting, concrete retaining walls, and modern drainage culverts specifically engineered to prevent seasonal landslide blockages during monsoon rains and winter snowfalls.\n\nLocal transport unions, hoteliers, and merchant associations in Besham Bazaar welcomed the news with enthusiasm, emphasizing that the upgraded highway will reduce transit time between Swat and Shangla by over an hour while opening picturesque valleys such as Yakhtangay to safe and accessible eco-tourism.`,
    author: 'Bureau Report',
    category: 'Infrastructure',
    createdAt: '2026-09-20T06:45:00Z',
    imageUrl: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1000'
  },
  {
    id: 'art-pine-nut-harvest',
    title: 'Shangla Pine Nut and Walnut Growers Report Bumper Harvest as Modern Processing Units Announced',
    content: `CHAKESAR, District Shangla — Agricultural growers and forest farming communities across Chakesar, Martung, and Puran are reporting a record-setting harvest of wild pine nuts (chilgoza) and organic walnuts this autumn season.\n\nDistrict Agriculture Extension officers noted that optimal spring precipitation combined with proactive biological pest management yielded a 25% increase in high-grade export-quality nuts compared to the prior fiscal year.\n\nTo safeguard farmers from predatory middleman markups, provincial authorities confirmed the establishment of Shangla’s first cooperative dry-fruit washing, grading, and vacuum-packaging facility in Alpuri. The initiative aims to enable local farming families to command direct market rates across national retail chains and overseas markets.`,
    author: 'Agri Desk',
    category: 'Agriculture',
    createdAt: '2026-09-20T05:30:00Z',
    imageUrl: 'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?q=80&w=1000'
  },
  {
    id: 'art-satellite-internet',
    title: 'High-Speed Satellite Internet Terminals Deployed Across Remote Valleys of Shangla',
    content: `ALPURI — In a landmark achievement for regional digital equity, the Universal Service Fund (USF) in partnership with leading telecommunications providers has deployed low-earth orbit (LEO) satellite broadband hubs across ten isolated mountain settlements in District Shangla.\n\nValleys previously isolated from cellular base towers—including highland villages in Damorai, Ajmir, and upper Kana—now enjoy uninterrupted 100 Mbps broadband connectivity powered by autonomous solar battery micro-grids.\n\nCommunity leaders and school principals celebrated the milestone, noting that rural students can now access real-time online educational portals and teachers can conduct virtual lectures, while local health units can initiate live telemedicine consultations with specialist physicians in Peshawar and Islamabad.`,
    author: 'Tech Desk',
    category: 'Technology',
    createdAt: '2026-09-20T04:15:00Z',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000'
  },

  // --- PREVIOUS ARTICLES (Retaining their original historical dates) ---
  {
    id: 'art-petrol-prices',
    title: 'Petrol and High-Speed Diesel Prices Revised for Next Fortnight',
    content: `ISLAMABAD — The federal government announced an official revision in the prices of petroleum products for the upcoming fortnight, citing fluctuations in international crude oil markets and regional import parity costs.\n\nAccording to a notification issued by the Ministry of Finance, petrol prices have been recalibrated to ensure market stability while minimizing the burden on everyday commuters and transport operators. Officials emphasized that the government has maintained petroleum levy thresholds within prescribed fiscal limits.\n\nPublic transport unions and business chambers in major urban centers including Karachi, Lahore, and Peshawar have urged authorities to pass down maximum relief, while supply depots confirmed seamless availability across nationwide fuel stations without any disruption in delivery channels.`,
    author: 'News Desk',
    category: 'Economy',
    createdAt: '2026-09-19T06:30:00Z',
    imageUrl: 'https://images.unsplash.com/photo-1549740375-0e1011504f2d?q=80&w=1000'
  },
  {
    id: 'art-shangla-weather',
    title: 'Shangla Weather Alert: Cold Wave & Heavy Precipitation Expected Across Alpuri and Besham',
    content: `ALPURI, District Shangla — The Pakistan Meteorological Department (PMD) and Shangla District Disaster Management Authority have issued an advisory for residents and travelers as a strong westerly weather system approaches the northern ridges of Khyber Pakhtunkhwa.\n\nHeavy rain and snowfall over higher altitudes, including Yakhtangay, Shangla Top, and Lilownai, are predicted over the next 48 hours. The district administration has directed highway maintenance teams and heavy machinery to remain on round-the-clock standby along the Swat-Besham and Karakoram Highway connector routes.\n\nAssistant Commissioner Alpuri urged motorists to avoid unnecessary night travel on slippery mountain tracks and advised tourists to ensure tire chains and cold-weather gear. Emergency relief control rooms have been activated across all sub-divisions.`,
    author: 'Weather Bureau',
    category: 'Shangla',
    createdAt: '2026-09-19T05:15:00Z',
    imageUrl: 'https://images.unsplash.com/photo-1516431883659-655d41c09bf9?q=80&w=1000'
  },
  {
    id: 'art-junaid-khan-profile',
    title: 'Who is Junaid Khan? Young Social Worker Leading Welfare Efforts in Shangla',
    content: `ALPURI, District Shangla — Junaid Khan is a prominent young social worker, philanthropist, and founder of the Shangla Welfare Development Organization (SWDO), a non-profit welfare body actively serving marginalized communities in District Shangla, Khyber Pakhtunkhwa.\n\nBorn and brought up in District Shangla, Junaid Khan completed his early education in his native village and observed first-hand the acute hardships faced by families in remote mountain terrains. Motivated by a commitment to public service, he established SWDO alongside dedicated youth volunteers.\n\nKey Welfare Milestones:\n1. Monthly ration distribution and disaster relief support for over 500 vulnerable households in Alpuri, Puran, Besham, and Martung.\n2. Educational sponsorship and free learning materials for orphaned and underprivileged students in regional schools.\n3. Rapid emergency relief during seasonal floods, landslides, and harsh winter snowstorms.\n4. Community youth leadership programs, environmental cleanliness campaigns, and healthcare camps.\n\nLocal elders, teachers, and civil society representatives have lauded Junaid Khan's tireless service, regarding him as a passionate advocate for regional empowerment. As Chairman of SWDO, he continues working to expand welfare outreach across northern Khyber Pakhtunkhwa.`,
    author: 'Shangla Bureau',
    category: 'Shangla',
    createdAt: '2026-09-19T04:00:00Z',
    imageUrl: 'https://i.postimg.cc/XvFhF3j0/Whats-App-Image-2026-09-19-at-10-15-36.jpg'
  },
  {
    id: 'art-pakistan-cricket',
    title: 'Pakistan Cricket Team Gears Up for International Home Series; Young Pacers Included',
    content: `LAHORE — The national cricket selection committee announced a revamped 16-man squad for the upcoming three-match One Day International and T20I series against visiting international opponents, rewarding standout performers from the national domestic championship.\n\nHead coach and team management expressed strong confidence in the blend of seasoned campaigners and fiery young fast bowlers from Khyber Pakhtunkhwa and Punjab. Training camps at the National Cricket Academy have focused intensively on fielding drills and death-over execution.\n\nTickets for the upcoming fixtures at Gaddafi Stadium Lahore and Rawalpindi Cricket Stadium went on sale through online portals, witnessing overwhelming demand from fans nationwide.`,
    author: 'Sports Desk',
    category: 'Sports',
    createdAt: '2026-09-18T16:20:00Z',
    imageUrl: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=1000'
  },
  {
    id: 'art-kp-it-freelance',
    title: 'KP IT Board Expands Digital Freelancing Centers Across Malakand Division',
    content: `PESHAWAR — In a major initiative aimed at curbing youth unemployment, the Khyber Pakhtunkhwa Information Technology Board (KPITB) has inaugurated three new digital co-working spaces and skill incubators across the Malakand Division.\n\nThe centers provide high-speed fiber internet, uninterrupted backup power, and training in artificial intelligence, modern web technologies, and export freelancing. Over 1,200 local graduates are slated to receive specialized certificates during the current fiscal year.\n\nProvincial authorities stated that the program bridges the digital divide for students in hilly districts such as Shangla, Swat, and Buner, empowering youth to earn sustainable foreign exchange directly from their home towns.`,
    author: 'Tech Desk',
    category: 'Tech',
    createdAt: '2026-09-18T14:10:00Z',
    imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1000'
  },
  {
    id: 'art-psx-record',
    title: 'Pakistan Stock Exchange (PSX) KSE-100 Surges Past Historic Highs on Inflows',
    content: `KARACHI — Bullish momentum continued on the Pakistan Stock Exchange on the final trading session, as the benchmark KSE-100 Index gained over 850 points to settle at a historic high.\n\nTrading volume was heavily steered by commercial banking, exploration, and cement sectors following positive international financial reports, steady currency valuation, and sustained foreign portfolio investments.\n\nFinancial market analysts noted that macro indicators, combined with prudent fiscal reforms, have reinforced retail and institutional investor confidence, signaling continued capital market stability.`,
    author: 'Economy Desk',
    category: 'Economy',
    createdAt: '2026-09-17T15:30:00Z',
    imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1000'
  },
  {
    id: 'art-dhq-alpuri-hospital',
    title: 'District Headquarters Hospital Alpuri Inaugurates New Emergency Diagnostic Facility',
    content: `ALPURI — Residents of Shangla welcomed the inauguration of a newly upgraded emergency diagnostics wing and maternal healthcare unit at District Headquarters (DHQ) Hospital Alpuri.\n\nEquipped with digital radiography, modern laboratory testing analyzers, and 24/7 cardiac monitoring systems, the new wing dramatically reduces the requirement for critically ill patients to undertake arduous transfers to tertiary hospitals in Mingora or Abbottabad.\n\nThe District Health Officer commended regional healthcare staff and philanthropic groups whose joint cooperation accelerated the procurement of life-saving medical equipment.`,
    author: 'Health Desk',
    category: 'Shangla',
    createdAt: '2026-09-17T09:45:00Z',
    imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1000'
  },
  {
    id: 'art-shangla-sports-gala',
    title: 'Shangla District Youth Sports Gala Concludes with Thrilling Cricket Final',
    content: `BESHAM — The annual Shangla District Youth Sports Festival concluded on a spirited note at Besham Sports Ground, featuring competitive matches in tape-ball cricket, football, volleyball, and traditional athletics.\n\nIn the cricket final, Alpuri Tigers edged past Besham Strikers in an edge-of-the-seat contest witnessed by thousands of local spectators from surrounding valleys. Trophies and cash scholarships were awarded to top performers across all sporting disciplines.\n\nDistrict dignitaries praised the energy of local youth and reaffirmed commitments to build dedicated sports complexes in each tehsil of District Shangla.`,
    author: 'Sports Desk',
    category: 'Sports',
    createdAt: '2026-09-16T17:15:00Z',
    imageUrl: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=1000'
  },
  {
    id: 'art-clean-energy',
    title: 'Clean Energy Push: Micro-Hydel and Solar Power Projects Advance Across Northern KP',
    content: `SWAT — Sustainable power initiatives gained new momentum as five new community micro-hydel units and rural off-grid solar micro-grids were brought online across the northern belt of Khyber Pakhtunkhwa.\n\nThe installations furnish continuous, environmentally friendly electricity to remote rural schools, basic health units, and over 1,800 domestic consumers situated beyond the national transmission grid.\n\nEnvironmental researchers commended the decentralized renewable approach, pointing out its long-term mitigation of deforestation and ecological preservation of scenic northern watersheds.`,
    author: 'Environment Desk',
    category: 'Environment',
    createdAt: '2026-09-16T11:20:00Z',
    imageUrl: 'https://images.unsplash.com/photo-1509391366560-28ba238175a2?q=80&w=1000'
  },
  {
    id: 'art-digital-scholarships',
    title: 'Nationwide Digital Literacy & Merit Scholarship Drive Launched for Higher Secondary Students',
    content: `ISLAMABAD — The Ministry of Federal Education has unveiled a nationwide merit-based digital scholarship program designed to support high-achieving matriculation and intermediate students from underserved districts.\n\nThe program includes laptop provisions, subsidized internet vouchers, and access to globally accredited online learning platforms in STEM, business analytics, and creative media.\n\nSpecial quotas have been earmarked for students hailing from newly merged tribal districts and mountainous regions of Khyber Pakhtunkhwa and Gilgit-Baltistan to promote equitable access to top-tier higher education.`,
    author: 'Education Desk',
    category: 'Education',
    createdAt: '2026-09-15T11:45:00Z',
    imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000'
  }
];
