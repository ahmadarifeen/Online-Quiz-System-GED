function prettyAnswer(ans) {
    if (!ans) return "No answer";

    // For drag-drop style answers: { zoneName: [ids...] }
    if (typeof ans === "object" && !Array.isArray(ans)) {
        return Object.entries(ans)
            .map(([zone, vals]) => `<b>${zone}</b>: ${Array.isArray(vals) ? vals.join(", ") : vals}`)
            .join("<br>");
    }

    // For arrays like ["1","5"]
    if (Array.isArray(ans)) {
        return ans.join(", ");
    }

    return ans.toString();
}

// Define the passage once
const section1Passage = `
<h5 style="font-weight: bold;">Guest Column: Fight Fire with Fire</h5>
By Paula Lehner, Director, Riverton Land Management Council<br><i>Riverton Daily News,</i> <br> June 4

<p>Here's an alarming number: $2 billion, the amount the U.S. Forest Service spends each year on wildfire suppression. No one is claiming that we should stop fighting these fires, but there is a scientifically proven way to limit their spread: by setting controlled, or prescribed, burns. These smaller fires, which clear accumulated dead or diseased plant life from forests and other areas, are far less hazardous than the uncontrolled wildfires that are increasing in frequency. By regularly burning up decaying vegetation, smaller fires eliminate that potential fuel for much larger fires. Less plant-matter fuel on the ground helps slow the progress of unwanted fires before they ever start.</p>

<p>In addition to causing fuel buildup, wildfire suppression has other negative consequences. For example, wildfires can purge insect infestations. In nature, small fires normally thin the population of insects in an area, but in the absence of those fires there is little to stop insect populations from increasing to unnaturally high levels. Further, many plants developed their life cycles in response to periodic natural fires from lightning strikes and other sources; these plants need fire if they are to remain healthy. Burning, as opposed to wildfire suppression, also helps create ash, which returns nutrients to the soil and can help new seeds germinate.</p>

<p>Certainly, there will always be fires that we have to fight. People and their homes have to be protected. But the fact that more and more homes are being built near wilderness areas, many right here in Riverton, means that the burden on land management agencies and their brave firefighters is increasing. We need the right tools if we are going to continue to do our jobs effectively, and those tools include prescribed burns.</p>

<p>There is no way around it. We have to fight fire with fire.</p>

<hr>

<h5 style="font-weight: bold;">Letter to the Editor: Prescribed Burns</h5>
<i>Riverton Daily News</i>, <br> June 11

<p>I found Paula Lehner's opinion piece about prescribed burns nothing less than horrifying. In her zeal, she neglected to mention even one of the many criticisms of prescribed burns. First, consider this appalling statistic: one in every 500 prescribed burns gets out of control, and while that may sound like a small fraction, just imagine if that one raging fire were the one Lehner had decided to set near your house. In 2009, a "controlled" fire set in Yosemite National Park was intended to burn 91 acres; instead it consumed 5,000 acres.</p>

<p>As for her ridiculous idea that "controlled" fires are needed to rid areas of wildfire fuel, doesn't she realize that fire isn't the only way to eliminate unwanted plants? Has she not heard of mechanical and chemical thinning—in simple terms, the use of power tools and herbicides?</p>

<p>Finally—and this is the worst omission of all—she did not mention the costs to the surrounding area of the fires she wants to set. Riverton has, in the past year, hit all-time high air pollution levels, and smoke from Lehner's fires would only worsen those numbers. Has she bothered to research the number of allergy and asthma sufferers in our region? Does she know that, nationwide, the incidence of allergies and asthma is rising? Is she planning to personally hand out face masks to affected individuals, or does she have some exciting new smoke-containment technology at her disposal?</p>

<p>Ms. Lehner should do more research before recommending a dangerous path for our community. We must fight the fire, not add fuel to it.<br><p>
Roy Rodriguez, resident <br> Riverton
`;
const section1Passage2 = `
 <h5 style="font-weight:bold;">The State of the Union Address</h5>
  by Adelaide Jackson, editor<br>
  for HistoryWeb.org<br>
  July 15, 2012
<br>
  <h6 style="font-weight:bold;">The U.S. Constitution and the Address</h6>
  <p>The State of the Union address is mandated by the U.S. Constitution, Article II, Section 3, Clause 1. In the address, the president must provide Congress with a status report on the conditions of America. The Constitution does not specify when or how the president should deliver the address. However, in most years the president has given the speech early in the year—just after Congress has reconvened—either in written form or in person.</p>

  <h6 style="font-weight:bold;">The Evolving Address</h6>
  <p>In 1790, President George Washington delivered the first State of the Union address in person to Congress. Washington's immediate successor, John Adams, also delivered the address in person. However, when Thomas Jefferson took office, he chose to forgo the practice. He claimed it was too much like the approach used by the government from which the United States had fought to gain its independence. Instead, Jefferson chose to put remarks to Congress in a written report.</p>

  <p>In the twentieth century, this approach changed—as did several key elements of the address. Woodrow Wilson resumed personal delivery of the speech in 1913. In 1923, Calvin Coolidge expanded the audience of the address to the nation by delivering the speech over the radio. In 1947, Harry Truman's speech was the first televised State of the Union address. George W. Bush became the first president to have his address transmitted live on the Internet in 2002 (see Figure 1).</p>

  <p>In addition to the changing delivery and audience, the name and role of the address has changed over the centuries. In the eighteenth century, the speech was known as the Annual Message. In the mid-twentieth century, the phrase "State of the Union" was coined by the thirty-second president, Franklin D. Roosevelt.</p>

  <p>In the formative years of the United States, the address was a presidential duty dictated by the founding members of the government. By the middle of the last century, though, the address had grown to an important political tool wielded by the president and criticized by the president's opponents.</p>
  
  <div style="display: flex; justify-content: center;">
  <img src="Capture.PNG" alt="Description of your image">
</div> <br>
<h5 style="font-weight-bold">The Relevance of the State of the Union Address</h5>
  by Clark Atel, contributor<br>
  for <i>Media Matters Weekly</i><br>
  August 22, 2012<br>

  <p>Over the past few decades, the percentage of Americans who watch the State of the Union address on television has declined, according to Nielsen Media Services (see Chart 1). However, this decline does not indicate that the speech is no longer relevant to the country and its operations. Instead, it points to a shift both in how the president uses the address and the manner in which the American public gains access to the president's message.</p>
<div style="display: flex; justify-content: center;">
  <img src="2.PNG" alt="Description of your image">
</div> <br>
 <p>In the eighteenth and nineteenth centuries, the State of the Union was delivered to the Congress and reported to the public in newspapers. With the inventions of radio, television, and the Internet, the American public went from recipients of day-old news to in-real-time audience members. As the demographic of the address's audience shifted, so did the tone and purpose of the address. Presidents in the twentieth century began using the tool less as a mechanism for updating the country on its status and more as a method for promoting presidential policy.</p>

  <p>According to a 2009 report by the Congressional Research Service (CRS), modern-day presidents have—successfully—used the State of the Union address to promote their policy proposals to the American public. The report cites an analysis of State of the Union addresses from 1946 to 2003. In that analysis, the correlation was made between the number of words the speaking president devoted to an issue and the percentage of the American public that identified that issue as a national priority.</p>

  <h6 style="font-weight:bold;">24-Hour News Cycles and the Internet</h6>

  <p>In the twenty-first century, information about presidential policy is constantly available via 24-hour news channels on cable television and over the Internet. This dramatic shift in information access has resulted in a decrease in the number of real-time viewers of State of the Union addresses. However, live viewing is only one way to learn what the president says. The message is available in transcripts, video posts, and excerpts—all formats in which the address is propagated over the Internet. For instance, typing "State of the Union" into a popular Internet search engine returns nearly two million possible options for Internet users to watch or read the address. Furthermore, searching a common video website shows that a video of the 2010 State of the Union address posted by the White House was viewed almost half a million times. This posting was only one of many, some of which had also been viewed hundreds of thousands of times. This evidence is indicative of the continuing relevance of the State of the Union address. Fewer Americans are watching the address via live television, but it still influences American voters and public discourse.</p>

  `;

const section2Passage = ` <h5 style="text-align:center; font-weight:bold">Excerpt From <i>A Box of Matches</i><br>by Nicholson Baker</h5>
  

  <p>Good morning, it's 4:45 a.m., and today after I made the fire I just sat for ten minutes doing nothing. Every so often I yawned, leaning forward in my chair with my elbows on my knees and my hands clasped. Sometimes a yawn will take on a life of its own, becoming larger and more extensive than I could have foretold, forcing me to bow my head and gape until several drops of saliva, fed by streams on the inside of my cheeks, collect at the corners of my mouth and fall to the floor. After a few large down-yewns like these, my eyes are lubricated and I can think more clearly. I don't know whether scientific studies of the human yawn have taken into account the way it helps to lubricate the eyeballs.</p>

  <p>I do worry about the duck in the cold. She's probably awake. We have a duck that lives in a doghouse outside. At night we drape a blanket over the doghouse and put a portable window screen over its front entrance. The screen is there to keep out foxes and coyotes. There is a red fox that lives on the hill with a bushy horizontal tail that is almost as big as he is, and at night sometimes you can hear the coyotes hooting from the fields on the other side of the river.</p>

  <p>The duck's blue dish freezes overnight. Every morning, before I leave for work (dropping Phoebe at school on the way), I hit the bowl upside down against a snow-pile and a disk of ice plops out; the bowl is self-cleaning in this weather. There are several other ice disks lying around in the snow, and these are packed at by crows in the daytime. They look like UFOs, or maybe more like corneas--the layer of half-dissolved duck food frozen at the upturned bottom is the iris. The duck emerges, making her tiny rapid cheeps, excited over the prospect of the warm water, which steams when I pour it in the bowl. She makes long scoops of water with her under-beak and then straightens her neck to let the warmith slide down. I hold out a handful of feed, and she goes at it with her beak, very fast, with much faster movements than humans can make, moving like the typing ball on an old IBM Selectric.<sup>1</sup> Some of the feed falls in the water, and that gets her crazy: she roots around in the swampy warmith, rapping at the bottom and finding all the nuggets that swirl there, making the water cloudy with the outflow from her throat. After a last burst of eating she looks up and is still, working her neck twice to settle her heartbeat, and she walks out with me down the street, and she walks out with me down the walkway. Sometimes here she will flap her wings hard, high-stepping in place without becoming airborne, like a jogger at a stoplight; sometimes she takes flight, although she hasn't completely refined her landings. Her eyes are on the sides of her head: she has to turn away from me to look up at me, then out at the world, then up at me again.</p>

  <p>Last night I was lying in bed when I heard a terribly sad sound, as of a cat in distress or an infant keening in the cold: long, slow, heart-rending cries. I half rose and held my breath and listened intently--was it the duck?—but the sound had stopped. I almost woke Claire to ask her what I should do. And then, as I resumed breathing, I realized that I was hearing a whistling coming from some minor obstruction in my own nose as I breathed.</p>

  <p> 
At times, when I sit here, a long series of daytime thoughts will pass through me—thoughts connected with work or, say, with town politics. That's all right—let those thoughts pass through you. You hear them coming, like a freight train with the whistle and the dinging; they take several minutes to go by, and then they're gone. Remember that it's very early in the morning—early, early, early, early. Sometimes the stars are thrillingly sharp when I first get up and stand at the window on the landing of the stairs: private needle-holes of exactitude in the stygian diorama.² Orion's belt is the only constellation that I recognize easily. The apportioning of stars into constellations is unnecessary: their anonymity enhances the sense of infinitude. This morning I saw a long pale mark like a scar across the heavens. It was the trail of a nigh jet, a night flight from somewhere to somewhere, lit from the underside by the setting moon. "A moonlit contrail,"³ I whispered to myself, and then I came downstairs and felt for the coffeemaker.</p>
 `;
const section3PassageTemplate = `

The passage below is incomplete. Navigate to each "Select..." button and choose the option that correctly completes the sentence <b>using formal standard English.</b>
<br>
To: The Northwest Community College Gazette Staff
<br>
From: Robert Clark, Editor in Chief
<br>
Date: February 22
<br>
Re: Campus security
<br>
I know you all are focused on producing an excellent newspaper, but allow me to direct your attention to another area that also requires your extraordinary diligence—campus security.
<br>
You should be aware that break-ins [[dropdown1]] in the general vicinity of campus. Thieves have targeted business offices and schools to steal technology hardware and resell it for a quick profit. These thieves often brazenly walk into unattended offices in broad daylight and haul away computers worth thousands of dollars. Carelessness and inattention are [[dropdown2]] accomplices. <br>
<br>
In our workplace, we have unfortunately become relaxed about security. I do not have to remind you that numerous students and nonstudents pass by our office in the student union daily, and it is no secret that any newspaper office contains valuable computers, printers, fax machines, digital cameras, and other equipment that thieves target. So please take the following precautions to protect our workplace: <br>
<br>
<ul>
  <li>[[dropdown3]] Do not forget to reset the alarm if you are the last one to leave the office. Never give the security code to anyone who is not a member of our staff.</li>

  <li>Starting next month, everyone will be issued keys to the front door and to his or her office. 

      Keep these keys on a key ring and treat them with the same vigilance you would the keys to your car or residence.
      Report any missing keys immediately.
      The fee for replacing a lost key is $50, and failure to pay the fee may inhibit your ability to enroll in classes the following semester.
      Never lend your office key to anyone, especially a nonstaffer.
    
  </li>

  <li>Try to avoid working in the office alone, but if you must, make sure to keep the front door locked.
  Do not open the door to someone unknown to you. He or she can reach a staff member or campus security by using the contact information posted outside our office.</li>
  <li>[[dropdown4]] Keep an eye out for suspicious behavior. 
    If you spot anyone loitering near the office, notice the front door ajar when no one is scheduled to be working, or detect any other irregularities, immediately call the campus police.</li>
    
  </li>
<br>
  I appreciate your cooperation in keeping our staff and workplace safe.
</ul>
`;

const erPassage = ` <h6 style="font-weight:bold;">Speech: Proposal for Automatic Traffic Light Cameras</h6>
    by Councilman Lorenzo Hart<br>
    Baler Town Council meeting<br>

    <h6>Fellow council members:</h6>

            <p>The cuts to this year's budget mean that fewer funds are available for many town departments. We must thoughtfully examine how to use our resources most effectively. I propose installing automatic traffic light cameras at 10 major intersections in town.</p>
        
            <p>Clearly, monitoring intersections is a public safety concern that lends itself to technology. Automatic traffic cameras photograph the license plates of automobiles running red lights. The town then sends traffic tickets to the violators. Automating this process will allow our police officers to focus on duties that require human attention, saving the cost of hiring additional officers.</p>
        
            <p>Beyond the practical advantage, automatic traffic cameras have well-documented benefits. The National Highway Traffic Safety Administration states that running red lights causes hundreds of traffic fatalities and thousands of injuries annually. According to a 2010 report by the Insurance Institute for Highway Safety, red-light cameras have lowered these numbers in hundreds of U.S. cities. A 2005 Federal Highway Administration study found a 25% decrease in front-into-side auto accidents in seven cities that use red-light cameras.</p>
        
            <p>Currently, drivers who get away with red-light violations tend to repeat the behavior, making intersections less safe overall. Automatic cameras discourage this habit. A 2009 study of a program in Montgomery County, Maryland, showed an average 78% decline in the number of red-light tickets issued after the cameras had operated for a year. Only about one-third of the drivers who each received a red-light violation ticket repeated the violation within a two-year period.</p>
       
            <p>In addition, by citing violators who may have gone unpunished without the assistance of the cameras, our town would increase revenue through additional traffic fines. A single intersection in Lawrence Township, New Jersey, generated over $1 million in fines in only one year. The facts show that an investment in these cameras pays for itself. Please support this proposal.</p>
    <br>
    
<b>Letter to the Editor: Automatic Cameras Not an Automatic Solution</b> <br>

Baler Herald <br>
April 8

<p> The town council's proposal to install 10 automatic red-light cameras at traffic lights is a proposal to waste money. I have scrutinized the details and calculated the costs. The proposal does say that the company AutoCamera Inc. has promised to waive installation fees that would normally run $50,000–$100,000 per intersection. However, that same company will charge us $5,000–$6,000 each month per camera to operate and maintain the cameras. That is at least $60,000 per year for one camera. Installing 10 cameras will have quite a high price tag. Six hundred thousand dollars per year could instead pay the salaries of new officers.</p>

<p> These cameras create other unexpected costs as well. In New Jersey and New York, several cities have been sued over the timing of traffic lights with automatic cameras. Plaintiffs often contend that the yellow lights are illegally short and that required inspections of the cameras were not performed. Lawsuits over automatic cameras are all too common, occurring also in states such as Ohio, Illinois, Missouri, and California. In a single December in New Jersey alone, traffic light company ATS settled 16 separate class-action lawsuits. Because we cannot control public reaction to these cameras, the real costs are hidden. Any new fines collected may pale in comparison to increased legal fees. </p>

<p> Additionally, the safety benefits of automatic red-light cameras are unclear. A 2005 National Highway Traffic Safety Administration report says that some cities using the cameras have seen a decrease in front-into-side accidents, but rear-end collisions have increased. Apparently, speeding drivers notice the cameras at the last minute. They apply their brakes abruptly, surprising the unsuspecting drivers behind them and causing accidents. These additional collisions are avoidable if we reject this proposal.</p>

<p> In every way, actual traffic police officers are superior to automatic red-light cameras. The only investment we need to make is hiring more officers.</p>
<br>
Madison Caan, civil engineer
<br> Baler   
    `;

const section3passage2 = `<b> Direction: Read the following passage carefully and answer the questions that follow.</b> <br>

<p>There was a time when Pete Sampras's tally of 14 Grand Slam singles titles — the last of which came at the U.S. Open in 2002 — seemed like the acme of sporting achievement in men's tennis. Little did anybody expect that in the next 16 years, across 64 Majors, not one or two but three players would stand shoulder to shoulder with the American great. On Sunday, Novak Djokovic became that third man, defeating Argentine Juan Martin del Potro, for his third U.S. Open title at Flushing Meadows. The 31-year-old Serb has never been considered a once-in-a-generation talent, as have Roger Federer and Rafael Nadal, the ones above him in the trophy count. But nobody represents the modern-day game as well as Djokovic. He is the ultimate practitioner of the attrition-based baseline tennis, and at his best, with his supremely efficient patrolling of the court, is near invincible. Over two weeks in New York he hit this high many times over. In fact, the 95-minute second set in the final was a microcosm of Djokovic's last two years. It was long and weary as fortunes swung back and forth. But adversity energised him, and he found a level which his opponent couldn't match. Coming after his triumphant return at Wimbledon in July, the latest success is evidence enough that technically, tactically and physically Djokovic is back to his best. </p> <br>

<p> If it was about the restoration of the old order on the men's side, it was the continuation of the new in the women's section. There has been a first-time winner in four of the past six Grand Slam tournaments, and 20-year-old Naomi Osaka added to the eclectic mix by becoming the first Japanese to win a Major. In Serena Williams, the winner of 23 singles Slams, the most by any player in the Open Era, Osaka faced the ultimate challenge. It was also an inter-generational battle like none other. The 16-year age gap between Williams and Osaka was the second biggest in the Open Era for a women's final, next only to Monica Seles (17) vs. Martina Navratilova (34) at the 1991 U.S. Open. To her immense credit, Osaka wasn't awed by the stage. While growing up, she had revered Williams. After all, this is someone who chose Williams as her subject for a school essay in third grade. On Saturday she played like she knew the 36-year-old's game like the back of her hand, absorbing everything the American threw at her, and redirecting them with much more panache. The magnitude of her achievement was nearly drowned out by the chaos in the aftermath of Williams's tirade against the chair umpire. Yet, the manner in which Osaka, at an impressionable young age, closed out the match with a cold relentlessness showed she is here to stay. </p>

`;

const section3passage3 = `
<b>Directions: Read the passage carefully and answer the questions given beside.</b><br>

<p>Kangaroo mother care (KMC) or the intervention where babies are placed in skin-to-skin contact with their mothers and exclusively breastfed has been recommended worldwide for stable low-birthweight newborns. Stable babies are defined as babies who do not need respiratory support or intravenous fluids and can accept oral feeds. Though previous studies have shown that keeping the baby in contact with the mother improves survival in babies (less than 2 kg weight at birth) when compared to standard hospital care, global data show that barely 5% receive such care. Also, there is no much evidence on kangaroo mother care impact when initiated at homes in India.</p><br>

<p>To understand this, a team of researchers carried out a study in Haryana. The results recently published in The Lancet show that kangaroo mother care improved survival by 30% and 25%, in babies till 28 days and six months of age, respectively. The paper adds that such care for all infants with low birthweight could substantially reduce neonatal and infant mortality.</p> <br>

<p>About 97% of the world's low-weight babies are born in developing countries, and India accounts for about 40% of this, implying an urgent need of effective interventions. Sarmila Mazumder, lead author of the study says, "In developing countries, even today, babies are born at home or even if born in hospitals, are discharged too soon without kangaroo mother care initiation. It is imperative therefore that such care is initiated at home."</p><br>

<p>For the study, over 8,000 stable low-birthweight babies weighing less than 2.25 kg, were enrolled from two districts in Haryana, during 2015-2018 and randomly assigned to intervention and control groups. Kangaroo mother care intervention was initiated at home, at an average age of 33 hours and delivered during the first month of life, through home visits. The enrolled babies were followed up at one, three and six months of age.</p><br>

<p>Dr. Mazumder adds that kangaroo mother care benefits are much beyond preventing hypothermia. "The care improves exclusive breast feeding, duration of breast feeding, and also reduces infections. It also promotes growth and development of the child and increases mother child bonding, and also reduces stress in both mother and baby," she explains.</p><br>

<p>When asked how long babies need to be kept in such care, Dr. Mazumder explained that in the study, mothers were advised to keep the babies as long as possible, preferably 24 hours in day and night and till 28 days of age. An average of 11 hours of skin-to-skin contact was achieved, and mothers reported giving kangaroo mother care till 27 days of baby's age. WHO recommends that it be continued till baby attains a weight of 2.5 kg or till babies wriggle out, indicating that they do not need kangaroo mother care any further.</p><br>

<p>Dr. Mazumder added that an implementation research was also conducted by the same team with the Haryana Government to scale up kangaroo mother care across 16 districts of the state. The paper adds that kangaroo mother care has the to prevent thousands of neonatal deaths in our country if 90% coverage can be achieved.</p>`;


const section3passage4 = `\<p\>For an economy that is tottering, a big bang announcement from the government can sometimes work to turn around sentiment. The unveiling by Finance Minister Nirmala Sitharaman on Tuesday of a mega push to infrastructure investment adding up to 102 lakh crore over the next five years belongs in this category. Projects in energy, roads, railways and urban infrastructure under the National Infrastructure Pipeline (NIP) have been identified by a task force. About 42% of such identified projects are already under implementation, 19% are under development and 31% are at the conceptual stage. The NIP task force appears to have gone project-by-project, assessing each for viability and relevance in consultation with the States. Considering that the NIP will be like a window to the future, a constant review becomes paramount if this is not to degenerate into a mere collation and listing of projects. A periodic review, as promised by the Finance Ministry, is necessary. The government's push on infrastructure development will not only enable ease of living — such as metro trains in cities and towns — but also create jobs and increase demand for primary commodities such as cement and steel. From this perspective, this push to invest in infrastructure is welcome.\</p\>\<br\>
\<p\>Identifying the projects to be put on the pipeline is the easy part. Implementing and commissioning them will be the more difficult one. There are a few hurdles that the NIP task force needs to watch out for. First, the financing plan assumes that the Centre and the States will fund 39% each while the private sector will chip in with 22% of the outlay. Going by the present fiscal situation, it will be no small challenge for the Centre to raise 39 lakh crore, even if it is over the next five years. The financial position of States is even more perilous. Second, the 22 lakh crore expected from private investment also looks steep considering the lack of appetite for fresh investment by the private sector in the last few years. In fact, this factor has been a major drag on economic growth. Given the scale of investment, debt will play an important role and it remains to be seen if banks have gotten over their apprehensions on infrastructure financing as a major part of their bad loans originated there. Finally, cooperation from States becomes very important in implementing infrastructure projects. The experience on this count has not been very happy till now. While these are genuine obstacles that the task force needs to manage, these should not detract from the need for a concerted effort to invest in infrastructure. The key will be following up and reviewing the pipeline at regular intervals.\</p\>`;
const section3Dropdowns = {
    dropdown1: ["is occuring", "has occured", "have occurred", "has been occurring"],
    dropdown2: ["its", "our", "their", "your"],
    dropdown3: ["Memorize the four-digit code, once you have written it down for our alarm.", "For our alarm, memorize the four-digit code once you write it down.", "effOnce you write it down for our alarm, memorize the four-digit code.ort", "Once you write down the four-digit code for our alarm, memorize it."],
    dropdown4: ["Above all,", "For example,", "On the other hand,", "In the interest of time,"]
};

const questions = [
    // Section 1
    {
        passage: section1Passage,
        type: "mcq",
        question: "What is the impact of Lehner's use of the word \"tools\" in paragraph 3?",
        options: ["A. It minimizes the emotional reaction people often have to prescribed burns.", "B. It indicates that using prescribed burns makes firefighting similar to other trades.", "C. It emphasizes that prescribed burns should be used only under specific conditions.", "D. It suggests that prescribed burns have costs similar to other implements used by firefighters."],
        answer: "B",
        section: 1
    },
    {
        passage: section1Passage,
        type: "drag-drop",
        question: "What evidence does Lehnar use to support her claims? Drag and drop for pieces of evidences into the chart ",
        options: [
            { id: "1", text: "More Homes are being built near wilderness areas" },
            { id: "2", text: "Prescribed Burns can limit wildfire spread." },
            { id: "3", text: "Small fires than populations of insects" },
            { id: "4", text: "Some plants develop by means of lightning strikes" },
            { id: "5", text: "Land Managers need certain tools for their jobs." },

        ],
        correctPlacement: {
            "The burden on firefighting is increasing": [
                "5", // Land Managers need certain tools for their jobs.
                "1"  // More Homes are being built near wilderness areas
            ],
            "Wildfires can be beneficial": [
                "3", // Small fires than populations of insects
                "4"  // Some plants develop by means of lightning strikes
            ]
        },
        section: 1
    },
    {
        passage: section1Passage,
        type: "mcq",
        question: "Which detail in Rodriguez's letter supports the idea that there are disadvantages associated with controlled fires?",
        options: ["\"\... fire isn't the only way to eliminate unwanted plants ...\"\ (paragraph 6)", "B. \"\Has she not heard of mechanical and chemical thinning—in simple terms, the use of power tools and herbicides?\"\ (paragraph 6)", "C. \"\Riverton has, in the past year, hit all-time high air pollution levels, and smoke from Lehner's fires would only worsen those numbers.\"\ (paragraph 7)", "D. \"\... nationwide, the incidence of allergies and asthma is rising ...\"\ (paragraph 7)"],
        answer: "C",
        section: 1
    },
    {
        passage: section1Passage,
        type: "mcq",
        question: "How does Rodriguez build his argument that \"\Lehner should do more research\"\?",
        options: ["A.  Rodriguez brings up several issues relevant to prescribed burns that Lehner fails to address.", "B. Rodriguez repeatedly casts doubt on Lehner's qualifications for discussing the issue of prescribed burns.", "C. Rodriguez raises numerous questions about whether Lehner's statistics about prescribed burns are accurate.", "D. Rodriguez demonstrates that Lehner is an outsider to the community that would be affected by prescribed burns."],
        answer: "A",
        section: 1
    },
    {
        passage: section1Passage,
        type: "mcq",
        question: "Which idea about the effect of prescribed burns is included in Rodriguez's letter?",
        options: ["A. They result in decreased sales of power tools and herbicides.", "B. They result in reduced enthusiasm about fighting air pollution.", "C. They cause financial hardship for organizations that fight fires.", "D. They cause respiratory problems for increasing numbers of people."],
        answer: "D",
        section: 1
    },
    {
        passage: section1Passage,
        type: "mcq",
        question: "Which conclusion is supported by Rodriguez's letter?",
        options: ["A. Prescribed burns have caused damage to residential areas.", "B. The size of prescribed burns and the smoke they create are difficult to control.", "C. Mechanical and chemical thinning are more successful than fire at eliminating unwanted plants.", "D. Inventing new smoke-containment technologies would increase the effectiveness of prescribed burns."],
        answer: "B",
        section: 1
    },
    {
        passage: section1Passage,
        type: "mcq",
        question: "How are the conclusions of Lehner's column and Rodriguez's letter similar?",
        options: ["A. Both convey the idea that firefighters should have a say in the use of prescribed burns.", "B.  Both convey the idea that prescribed burns are simply one element of wildfire prevention.", "C. Both convey the idea that the subject of prescribed burns leaves no room for compromise.", "D. Both convey the idea that the effectiveness of prescribed burns has not yet been sufficiently studied."],
        answer: "B",
        section: 1
    },

    {
        passage: section1Passage2,
        type: "mcq",
        question: "Read this sentence from paragraph 1. <br> The Constitution does not specify when or how the president should deliver the address.<br><br> Based on Jackson's article, what can readers infer from the sentence?",
        options: ["A. The writers of the Constitution did not view the president's address as a high priority.", "B. The Constitution does not restrict the content of the president's public communication.", "C. The Constitution does not protect the right of the president to present a political agenda.", "D. The writers of the Constitution did not dictate the methods the president must use to give the address."],
        answer: "D",
        section: 1
    },
    {
        passage: section1Passage2,
        type: "mcq",
        question: "How do the data in Figure 1 extend the information in Jackson's article?",
        options: ["A. by showing how technology has affected the address", "B. by revealing when the address saw the greatest change", "C. by illustrating how changes to the address have affected its purpose", "D. by highlighting important developments in the history of the address"],
        answer: "A",
        section: 1
    },
    {
        passage: section1Passage2,
        type: "mcq",
        question: "Which conclusion is best supported by Jackson's article?",
        options: ["A. State of the Union addresses will continue to change in the future.", "B. Future presidents will look to previous State of the Union addresses for inspiration.", "C. State of the Union addresses will be received in the future with increasing criticism.", "D. Future presidents will emphasize style over substance in their State of the Union addresses."],
        answer: "A",
        section: 1
    },
    {
        passage: section1Passage2,
        type: "drag-drop",
        question: "Drag and drop two statments that expresses Atel's purposes for writing his article into the empty boxes",
        options: [
            { id: "1", text: "to argue that the address is of interest to the American public" },
            { id: "2", text: "to compare the effectiveness of sharing the address through different media" },
            { id: "3", text: "to persuade readers to research politics via new information sources" },
            { id: "4", text: "to emphasize the benefits of real-time news over day-old news" },
            { id: "5", text: "to analyze the findings of a report about people viewing the address on television" },

        ],
        correctPlacement: {
            "Atel's Purpose": [
                "5", // 
                "1"  // 
            ],

        },
        section: 1
    },
    {
        passage: section1Passage2,
        type: "mcq",
        question: "How are Jackson's and Atel's articles similar?",
        options: ["A. Both articles discuss the audience's changing experience of the State of the Union address.", "B. Both articles provide insight into the founding leaders' view of the State of the Union address.", "C. Both articles consider the effects of the media's overexposure of the State of the Union address.", "D. Both articles describe the Internet's options for viewing or reading the State of the Union address."],
        answer: "A",
        section: 1
    },
    {
        passage: section1Passage2,
        type: "mcq",
        question: "Read this sentence from paragraph 9.<br> Fewer Americans are watching the address via live television, but it still influences American voters and public discourse <br> Which idea mentioned in Atel's article does this sentence support?",
        options: ["A. that coverage of the State of the Union in real time is important to the American people", "B. that the State of the Union has changed from being an update on the status of the nation", "C. that more of the American public is accessing the State of the Union through newer technology", "D. that analysts record the numbers of words in the State of the Union that are devoted to particular issues"],
        answer: "C",
        section: 1
    },
    {
        passage: section1Passage2,
        type: "mcq",
        question: "Based on the information in the two articles, Jackson and Atel share which perspective?",
        options: ["A. The State of the Union address has become an important political tool for the president.", "B. The State of the Union address influences the American public more than it influences Congress.", "C. Interest in watching a live broadcast of the State of the Union address has declined in recent years.", "D. The Internet has decreased the importance of the president delivering the State of the Union address to Congress."],
        answer: "A",
        section: 1
    },

    // Section 2
    {
        passage: erPassage,
        type: "er", // extended response
        question: "Write your response to the passage here:",
        answer: "", // no predefined answer for ER
        section: 2
    },

    // Section 3 - Normal Fill Question
    {
        passage: section2Passage,
        type: "mcq",
        question: "Why does the author describe the duck's bowl as self-cleaning?",
        options: ["A. The duck eats all of the food every night, leaving the bowl empty.", "B. The duck food sticks to the frozen water when the bowl is emptied.", "C. The duck food scatters about the yard when the bowl is knocked over.", "D.  The duck displaces the food from the bowl when she drinks the warm water."],
        answer: "B",
        section: 3
    },
    {
        passage: section2Passage,
        type: "mcq",
        question: "In paragraph 5, how does the author's use of the freight train image affect the meaning of the passage?",
        options: ["A. The train image illustrates the narrator's ability to ignore unimportant thoughts.", "B. The train image clarifies why the narrator has multiple thoughts in succession.", "C. The train image highlights the narrator's desire to spend time doing nothing.", "D. The train image emphasizes why the narrator fixates on certain sounds."],
        answer: "B",
        section: 3
    },
    {
        passage: section2Passage,
        type: "mcq",
        question: "Read this sentence from paragraph 5. <br> \"\A moonlit contrail,\"\ I whispered to myself, and then I came downstairs and felt for the coffeemaker. <br>What can the reader infer from this sentence ? ",
        options: ["A. The narrator casually accepts that nature and humans interconnect.", "B. The narrator changes his behavior because of something in the sky.", "C. The narrator believes ordinary tasks intrude on the beauty of nature.", "D. The narrator recovers his composure after experiencing an unusual event."],
        answer: "B",
        section: 3
    },
    {
        passage: section2Passage,
        type: "drag-drop",
        question: "Drag and drop the events into the empty boxes to show the Order in which they occur in the excerpt",
        options: [
            { id: "1", text: "The duck fusses at the food in the water. " },
            { id: "2", text: "The duck comes out of the doghouse." },
            { id: "3", text: "The duck walks with the narrator" },
            { id: "4", text: "The narrator hears a strange sound. " },
            { id: "5", text: "The narrator cleans out the bowl. " },

        ],
        correctPlacement: {
            "Order of Events": [
                "5",
                "2",
                "1",
                "3",
            ],
        },
        section: 3
    },
    {
        passage: section2Passage,
        type: "mcq",
        question: "Why is the duck important to the narrator?",
        options: ["A. The narrator thinks the duck is symbolic of the natural world.", "B. The narrator feels responsible for the duck because it relies on him.", "C. The narrator has transferred his affection for his old dog to the duck.", "D. The narrator shows his love for his daughter through his care of the duck."],
        answer: "B",
        section: 3
    },
    {
        passage: section2Passage,
        type: "mcq",
        question: "Based on details in the excerpt, which inference can be made about the narrator?",
        options: ["A. He is concerned about local politics.", "B. He resents doing chores every morning.", "C. He is contemplative and enjoys observing nature.", "D.  He keeps the rest of the world out of his personal life."],
        answer: "B",
        section: 3
    },
    {
        passage: section3passage2,
        type: "mcq",
        question: "Why is Djokovic described as the ultimate practitioner of attrition-based baseline tennis?",
        options: ["A. Because he relies only on powerful serves to win points", "B. Because he uses consistent, grinding rallies and efficient court coverage to outlast opponents", "C. Because he prefers flashy, risky strokes that amaze spectators ", "D. Because he often avoids long rallies and plays short matches"],
        answer: "B",
        section: 3
    },
    {
        passage: section3passage2,
        type: "mcq",
        question: "How does the author contrast men’s and women’s tennis in the passage?",
        options: ["A. By showing how both sides were dominated by a single champion", "B. By comparing Djokovic’s comeback with Osaka’s rise as a new champion", "C. By explaining how Federer and Nadal inspired Serena Williams", "D. By stating that men’s tennis is declining while women’s tennis is growing"],
        answer: "B",
        section: 3
    },

    {
        passage: section3passage2,
        type: "mcq",
        question: "In what way was Osaka’s victory both historic and symbolic?",
        options: ["A. She equaled Serena Williams’s record of 23 Slams", "B. She became the youngest champion in U.S. Open history", "C. She broke cultural barriers by being the first Japanese player to win a Grand Slam, defeating her childhood idol", "D. She retired after her victory, making it a symbolic farewell"],
        answer: "C",
        section: 3
    },

    {
        passage: section3passage2,
        type: "mcq",
        question: "How did the inter-generational aspect add to the significance of the Williams–Osaka final?",
        options: ["A. It highlighted the shift from an established legend to a rising star", "B. It showed how older players always dominate younger ones", "C. It proved that age differences don’t matter in tennis", "D. It suggested Serena was too old to compete again"],
        answer: "A",
        section: 3
    },

    {
        passage: section3passage2,
        type: "mcq",
        question: "Why does the author mention Osaka’s childhood admiration for Serena Williams?",
        options: ["A. To show how Osaka lacked confidence before the final", "B. To emphasize how remarkable it was for Osaka to beat her idol on the biggest stage", "C. To suggest that Serena coached Osaka secretly", "D. To prove that Osaka did not deserve the title on her own merit"],
        answer: "B",
        section: 3
    },

    {
        passage: section3passage2,
        type: "mcq",
        question: "What broader theme about sports does the passage suggest?",
        options: ["A. Success in tennis is mostly based on luck", "B. Emerging stars always replace older champions easily", "C. Resilience, preparation, and adaptability are key to long-term success", "D. Only physical strength determines success in tennis"],
        answer: "C",
        section: 3
    },
    {
        passage: section3passage3,
        type: "mcq",
        question: "Why is Kangaroo Mother Care (KMC) particularly emphasized for developing countries like India?",
        options: ["A. Because it requires expensive equipment and advanced hospitals", "B. Because most low-birthweight babies are born in developed countries", "C. Because India has the largest share of low-birthweight babies and many are born at home or discharged early", "D. Because WHO has made it mandatory in all countries"],
        answer: "C",
        section: 3
    },
    {
        passage: section3passage3,
        type: "mcq",
        question: "What does the study in Haryana reveal about the effectiveness of KMC?",
        options: ["A. It reduced survival by 30% in 28 days and 25% in six months", "B. It improved survival by 30% in 28 days and 25% in six months", "C. It had no significant impact on survival rates", "D. It only improved mother-child bonding but not survival"],
        answer: "B",
        section: 3
    },
    {
        passage: section3passage3,
        type: "mcq",
        question: "Based on the passage, what broader benefits of KMC beyond preventing hypothermia are emphasized?",
        options: ["A. Reduced breastfeeding and weaker mother-child bonding", "B. Improved exclusive breastfeeding, growth, bonding, and reduced infections", "C. Faster discharge of babies from hospitals", "D. Reduced dependency on healthcare workers"],
        answer: "B",
        section: 3
    },
    {
        passage: section3passage3,
        type: "mcq",
        question: "Why did the researchers choose to initiate KMC at home in Haryana?",
        options: ["A. Because hospitals refused to provide neonatal care", "B. Because many babies in India are either born at home or discharged too early", "C. Because home care was more expensive than hospital care", "D. Because KMC cannot be practiced in hospitals"],
        answer: "B",
        section: 3
    },
    {
        passage: section3passage3,
        type: "mcq",
        question: "What is implied by WHO’s recommendation to continue KMC till babies reach 2.5 kg or wriggle out?",
        options: ["A. KMC is harmful after 2.5 kg weight is reached", "B. Babies naturally show readiness to stop KMC when they develop enough strength", "C. Parents often misuse KMC beyond 28 days", "D. The WHO wants all mothers to practice KMC for exactly one months"],
        answer: "B",
        section: 3
    },
    {
        passage: section3passage3,
        type: "mcq",
        question: "What does the passage imply about the scalability of KMC in India?",
        options: ["A. It is too resource-intensive to implement widely", "B. It can prevent thousands of deaths if adopted on a large scale", "C. It has already reached 100% coverage in India", "D. It is effective only in urban hospitals, not rural homes"],
        answer: "B",
        section: 3
    },
    {
        passage: section3passage3,
        type: "mcq",
        question: "What can be inferred about the cultural and systemic challenges in implementing KMC?",
        options: ["A. Mothers may not be willing to spend long hours in skin-to-skin contact", "B. Babies resist KMC and prefer incubators", "C. Hospitals provide free incubators, so mothers reject KMC", "D. WHO discourages at-home KMC in developing countries"],
        answer: "A",
        section: 3
    },
    {
        passage: section3passage4,
        type: "mcq",
        question: "Why does the passage describe the government’s infrastructure announcement as a “big bang” move?",
        options: ["A. Because it focuses only on metro trainst", "B. Because it can immediately improve investor and public sentiment in a struggling economy", "C. Because it guarantees private investment without challenges", "D. Because it is primarily aimed at rural areas"],
        answer: "B",
        section: 3
    },
    {
        passage: section3passage4,
        type: "mcq",
        question: "What is the significance of the National Infrastructure Pipeline (NIP) according to the passage?",
        options: ["A. It lists projects without assessing feasibility", "B. It serves as a window to the future, requiring constant review and planning", "C. It only benefits urban areas without generating employment", "D. It ensures complete private sector funding for infrastructure"],
        answer: "B",
        section: 3
    },
    {
        passage: section3passage4,
        type: "mcq",
        question: "Why does the passage describe the government’s infrastructure announcement as a “big bang” move?",
        options: ["A. Because it focuses only on metro trainst", "B. Because it can immediately improve investor and public sentiment in a struggling economy", "C. Because it guarantees private investment without challenges", "D. Because it is primarily aimed at rural areas"],
        answer: "B",
        section: 3
    },
    {
        passage: section3passage4,
        type: "mcq",
        question: "Which of the following is highlighted as a key challenge for implementing the NIP projects?",
        options: ["A. Lack of available land for construction", "B. Financing difficulties for Centre, States, and private sector participation", "C. Too many projects already completed", "D. Absence of any task force to monitor projects"],
        answer: "B",
        section: 3
    },
    {
        passage: section3passage4,
        type: "mcq",
        question: "What inference can be made about private sector participation in infrastructure investment?",
        options: ["A. Private investment is expected to be effortless due to strong appetite", "B. The private sector has been hesitant in recent years, making the target ambitious", "C. Private companies will fund more than the Centre and States", "D. Private investment is irrelevant for economic growth"],
        answer: "B",
        section: 3
    },
    {
        passage: section3passage4,
        type: "mcq",
        question: "Why does the passage stress the importance of cooperation from States?",
        options: ["A. Because States are responsible for all funding", "B. Because without cooperation, project implementation will face delays or failures", "C. Because the Centre cannot initiate projects without private companies", "D. Because the States have unlimited financial resources"],
        answer: "B",
        section: 3
    },
    {
        passage: section3passage4,
        type: "mcq",
        question: "According to the passage, why is periodic review of the NIP necessary?",
        options: [
            "A. To ensure all projects are profitable for private investors only",
            "B. To avoid the pipeline becoming a mere list of projects without progress",
            "C. To replace State involvement with private funding",
            "D. To increase debt levels in banks"
        ],
        answer: "B",
        section: 3
    },
    {
        passage: section3passage4,
        type: "mcq",
        question: "What is implied about banks’ role in the NIP financing?",
        options: [
            "A. Banks are fully confident and have no reservations about lending",
            "B. Banks’ prior bad loans in infrastructure may make them cautious",
            "C. Banks will fund only private sector projects",
            "D. Banks are not involved in financing infrastructure"
        ],
        answer: "B",
        section: 3
    },
    {
        passage: section3passage4,
        type: "mcq",
        question: "What is the overall tone of the passage toward the NIP initiative?",
        options: [
            "A. Completely critical, emphasizing only obstacles",
            "B. Supportive, while acknowledging challenges that need careful management",
            "C. Neutral, without taking a position",
            "D. Dismissive, suggesting the plan is unrealistic"
        ],
        answer: "B",
        section: 3
    },
    {
        passage: section3passage4,
        type: "mcq",
        question: "Which of the following best explains why implementing NIP projects is considered more difficult than identifying them?",
        options: [
            "A. Identifying projects requires less coordination and fewer resources than actual execution",
            "B. Implementation depends solely on private sector funding",
            "C. Identifying projects requires more time than execution",
            "D. Execution does not involve financing or state cooperation"
        ],
        answer: "A",
        section: 3
    },
    // Section 3 - Dropdown Question (Email)
    {
        passage: section3PassageTemplate,  // use the template defined above
        type: "dropdown",                  // mark as dropdown type
        question: "Complete the email using the dropdowns below:", // the question prompt
        options: section3Dropdowns,        // use the dropdown options object
        section: 3,
        answer: {
            dropdown1: "have occurred",
            dropdown2: "our",
            dropdown3: "Once you write down the four-digit code for our alarm, memorize it.",
            dropdown4: "Above all,"
        }
    },

];

let currentQuestionIndex = 0;
const answers = [];
const totalQuestions = questions.length;

// Sections
const sections = [
    { name: "Section 1", duration: 27 }, // minutes
    { name: "Section 2", duration: 45 },
    { name: "Section 3", duration: 65 }
];
let currentSectionIndex = 0;
let sectionDuration = sections[currentSectionIndex].duration * 60; // in seconds
const timerDiv = document.getElementById("timer");
let timerInterval;

// Show Section Complete Modal
function showSectionComplete(sectionName, isTimeUp = false) {
    const modal = document.getElementById("section-modal");

    if (currentSectionIndex === sections.length - 1) {
        // Last section
        document.getElementById("modal-title").textContent = isTimeUp
            ? `⏰ Time's Up!`
            : `All Sections Completed!`;
        document.getElementById("modal-msg").textContent = isTimeUp
            ? `${sectionName} time is over. Click below to finish the exam.`
            : `Click below to finish the exam.`;

        document.getElementById("modal-next-btn").textContent = "Finish Exam";
        document.getElementById("modal-next-btn").onclick = () => {
            modal.style.display = "none";
            submitExam(); // Show results
            passageDiv.style.display = "none"; // hide passage
            qDiv.style.display = "none"; // hide questions
            nextBtn.style.display = "none";
            backBtn.style.display = "none";
            timerDiv.style.display = "none";
        };
    } else {
        // Not last section
        document.getElementById("modal-title").textContent = isTimeUp
            ? `⏰ Time's Up!`
            : `${sectionName} Completed!`;
        document.getElementById("modal-msg").textContent = isTimeUp
            ? `${sectionName} time is over. Click below to proceed to the next section.`
            : `You can now proceed to the next section.`;

        document.getElementById("modal-next-btn").textContent = "Next Section";
        document.getElementById("modal-next-btn").onclick = () => {
            modal.style.display = "none";
            currentSectionIndex++;
            sectionDuration = sections[currentSectionIndex].duration * 60;
            currentQuestionIndex = 0;
            startSectionTimer();
            renderQuestion(currentQuestionIndex);
        };
    }

    modal.style.display = "block";
}


// Section Timer
function startSectionTimer() {
    // Clear any existing timer first
    if (timerInterval) clearInterval(timerInterval);

    timerDiv.textContent = `${sections[currentSectionIndex].name} - Time left: --:--`;

    timerInterval = setInterval(() => {
        let minutes = Math.floor(sectionDuration / 60);
        let seconds = sectionDuration % 60;

        timerDiv.textContent = `${sections[currentSectionIndex].name} - Time left: ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        sectionDuration--;

        if (sectionDuration < 0) {
            clearInterval(timerInterval); // Stop this interval immediately
            showSectionComplete(sections[currentSectionIndex].name, true); // Time's up modal

            currentSectionIndex++;
            if (currentSectionIndex < sections.length) {
                sectionDuration = sections[currentSectionIndex].duration * 60;
                currentQuestionIndex = 0;
                startSectionTimer();  // Start next section timer
                renderQuestion(currentQuestionIndex);
            } else {
                submitExam(); // Exam ends
            }
        }
    }, 1000);
}


// Drag & Drop functions
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text");
    const item = document.getElementById(data);
    ev.target.appendChild(item);
}

// Render question
function renderQuestion(index) {
    const sectionQuestions = questions
        .filter(q => q.section === currentSectionIndex + 1)
        .map(q => ({ ...q, globalIndex: questions.indexOf(q) }));
    const q = sectionQuestions[index];

    const passageDiv = document.getElementById("passage-container");
    const qDiv = document.getElementById("questions-container");

    // Reset display defaults
    qDiv.style.display = "block";
    passageDiv.style.flex = "2"; // default

    document.getElementById("question-number").textContent =
        `Question: ${index + 1} of ${questions.filter(q => q.section === currentSectionIndex + 1).length}`;

    // === Special rendering for Section 3 dropdown email ===
    if (
        q.section === 3 &&
        q.type === "dropdown" &&
        typeof q.options === "object" &&
        !Array.isArray(q.options)
    ) {
        passageDiv.style.flex = "1";       // passage takes full width
        qDiv.style.display = "none";       // hide questions container

        let passageHTML = q.passage;
        for (let key in q.options) {
            const options = q.options[key]
                .map(opt => `<option value="${opt}">${opt}</option>`)
                .join("");
            const selectHTML = `<select name="${key}"><option value="">--Select--</option>${options}</select>`;
            passageHTML = passageHTML.replace(`[[${key}]]`, selectHTML);
        }
        passageDiv.innerHTML = passageHTML;

        const nextBtn = document.getElementById("next-btn");
        nextBtn.textContent = "Submit Section";
        nextBtn.onclick = () => {
            const dropdownAnswers = {};
            document.querySelectorAll("#passage-container select").forEach(sel => {
                dropdownAnswers[sel.name] = sel.value;
            });
            answers[q.globalIndex] = dropdownAnswers;
            showSectionComplete(sections[currentSectionIndex].name);
        };

        const backBtn = document.getElementById("back-btn");
        backBtn.disabled = false;
        backBtn.onclick = () => {
            currentQuestionIndex = index - 1 >= 0 ? index - 1 : 0;
            renderQuestion(currentQuestionIndex);
        };

        return; // Skip normal rendering for this special dropdown
    }

    // ===== Normal question rendering =====
    passageDiv.innerHTML = q.passage ? q.passage : "";
    qDiv.innerHTML = `<div class="question"><p>${index + 1}. ${q.question}</p></div>`;
    const questionContainer = qDiv.querySelector(".question");

    if (q.type === "mcq") {
        q.options.forEach(opt => {
            const letter = opt.split(".")[0]; // "A", "B", etc.
            const optionDiv = document.createElement("div");
            optionDiv.innerHTML =
                `<input type="radio" name="q${q.globalIndex}" value="${letter}" ${answers[q.globalIndex] === letter ? "checked" : ""}> ${opt}`;
            questionContainer.appendChild(optionDiv);
        });
    } else if (q.type === "fill") {
        const input = document.createElement("input");
        input.type = "text";
        input.name = `q${q.globalIndex}`;
        input.placeholder = "Type your answer here";
        if (answers[q.globalIndex]) input.value = answers[q.globalIndex];
        questionContainer.appendChild(input);
    } else if (q.type === "dropdown") {
        const select = document.createElement("select");
        select.name = `q${q.globalIndex}`;
        q.options.forEach(opt => {
            const option = document.createElement("option");
            option.value = opt;
            option.textContent = opt;
            select.appendChild(option);
        });
        if (answers[q.globalIndex]) select.value = answers[q.globalIndex];
        questionContainer.appendChild(select);
    } else if (q.type === "er") {
        const textarea = document.createElement("textarea");
        textarea.name = `q${q.globalIndex}`;
        textarea.placeholder = "Type your response here...";
        textarea.rows = 22;
        textarea.style.width = "100%";
        textarea.style.padding = "8px";
        textarea.style.fontSize = "14px";
        textarea.style.resize = "vertical";
        if (answers[q.globalIndex]) textarea.value = answers[q.globalIndex];
        questionContainer.appendChild(textarea);
    }
    // === NEW: drag-drop rendering ===
    // ...
    else if (q.type === "drag-drop") {
        const container = document.createElement("div");
        container.className = "drag-drop-container";

        const optionsDiv = document.createElement("div");
        optionsDiv.className = "drag-options";
        optionsDiv.ondrop = drop;
        optionsDiv.ondragover = allowDrop;

        q.options.forEach(opt => {
            const item = document.createElement("div");
            item.className = "drag-item";
            item.id = opt.id;
            item.draggable = true;
            item.ondragstart = drag;
            item.textContent = opt.text;
            optionsDiv.appendChild(item);
        });
        container.appendChild(optionsDiv);

        const tableDiv = document.createElement("div");
        tableDiv.className = "table-container";

        const columnNames = Object.keys(q.correctPlacement);
        let tableHTML = `<table><thead><tr>`;

        columnNames.forEach(name => {
            tableHTML += `<th>${name}</th>`;
        });
        tableHTML += `</tr></thead><tbody><tr>`;

        columnNames.forEach(name => {
            tableHTML += `<td id="${name}" class="drop-zone" ondrop="drop(event)" ondragover="allowDrop(event)" data-target-name="${name}"></td>`;
        });
        tableHTML += `</tr></tbody></table>`;

        tableDiv.innerHTML = tableHTML;
        container.appendChild(tableDiv);

        // Make sure you append the main container to the question container
        questionContainer.appendChild(container);
    }
    // === Next button logic ===
    const nextBtn = document.getElementById("next-btn");
    nextBtn.textContent = index === sectionQuestions.length - 1 ? "Submit Section" : "Next";
    nextBtn.onclick = () => {
        saveAnswer(index, sectionQuestions);

        if (index < sectionQuestions.length - 1) {
            // If not last question in section, go next
            renderQuestion(index + 1);
        } else if (currentSectionIndex < sections.length - 1) {
            // If last question of this section, but not last section, show modal
            showSectionComplete(sections[currentSectionIndex].name);
        } else {
            // Last question of last section -> submit exam and show results
            submitExam(); // this will display results div
            passageDiv.style.display = "none"; // hide passage
            qDiv.style.display = "none"; // hide questions
            nextBtn.style.display = "none"; // hide next button
            backBtn.style.display = "none"; // hide back button
            timerDiv.style.display = "none"; // hide timer
        }
    };


    // === Back button logic ===
    const backBtn = document.getElementById("back-btn");
    backBtn.disabled = index === 0;
    backBtn.onclick = () => {
        if (index > 0) {
            saveAnswer(index, sectionQuestions);
            renderQuestion(index - 1);
        }
    };
}

// Save answer
function saveAnswer(index, sectionQuestions) {
    const q = sectionQuestions[index];
    if (q.type === "drag-drop") {
        const placements = {};
        // Get all drop zones for this question
        Object.keys(q.correctPlacement).forEach(zoneId => {
            const zone = document.getElementById(zoneId);
            if (zone) {
                // Get all direct children that are drag items
                const items = Array.from(zone.children).filter(child =>
                    child.classList.contains('drag-item')
                );
                placements[zoneId] = items.map(item => item.id);
            } else {
                placements[zoneId] = [];
            }
        });
        answers[q.globalIndex] = placements;
    }
    else if (q.type === "mcq") {
        const selected = document.querySelector(`input[name="q${q.globalIndex}"]:checked`);
        if (selected) {
            answers[q.globalIndex] = selected.value;
        }
    }
    else if (q.type === "er" || q.type === "fill") {
        const input = document.querySelector(`[name="q${q.globalIndex}"]`);
        if (input) {
            answers[q.globalIndex] = input.value;
        }
    }
    else if (q.type === "dropdown" && typeof q.options === "object") {
        // Special case: Section 3 dropdown email (multiple blanks)
        const dropdownAnswers = {};
        document.querySelectorAll("#passage-container select").forEach(sel => {
            dropdownAnswers[sel.name] = sel.value;
        });
        answers[q.globalIndex] = dropdownAnswers;
    }
    else if (q.type === "dropdown") {
        // Simple dropdown (single select)
        const select = document.querySelector(`[name="q${q.globalIndex}"]`);
        if (select) {
            answers[q.globalIndex] = select.value;
        }
    }
}


// Submit Exam
function submitExam() {
    if (timerInterval) clearInterval(timerInterval);
    let totalCorrect = 0;
    const mistakes = [];
    // Clear previous ER answers display
    const erContainer = document.getElementById("er-answers");
    erContainer.innerHTML = "";
    questions.forEach((q, index) => {
        const userAnswer = answers[index];
        if (q.type === "mcq" || q.type === "fill" || q.type === "dropdown") {
            if (userAnswer && userAnswer.toString().trim().toLowerCase() === q.answer.toString().trim().toLowerCase()) {
                totalCorrect++;
            } else {
                mistakes.push({
                    question: q.question,
                    yourAnswer: userAnswer || "No answer",
                    correctAnswer: q.answer
                });
            }
        } else if (q.type === "drag-drop") {
            let correct = true;
            if (q.correctPlacement) {
                for (let dropZoneId in q.correctPlacement) {
                    const expectedIds = q.correctPlacement[dropZoneId];       // e.g. ["5","1"]
                    const placedIds = userAnswer?.[dropZoneId] || [];         // user's array from answers

                    // Check lengths are same AND every expected id is present (ignore order)
                    if (
                        placedIds.length !== expectedIds.length ||
                        !expectedIds.every(id => placedIds.includes(id))
                    ) {
                        correct = false;
                        break;
                    }
                }
            }
            if (correct) {
                totalCorrect++;
            } else {
                // keep the raw object so we can display it nicely later
                mistakes.push({
                    question: q.question,
                    yourAnswer: userAnswer || {},
                    correctAnswer: q.correctPlacement
                });
            }
        }
        else if (q.type === "dropdown" && typeof q.answer === "object") {
            let correct = true;
            for (let key in q.answer) {
                if (
                    !userAnswer ||
                    !userAnswer[key] ||
                    userAnswer[key].toString().trim().toLowerCase() !== q.answer[key].toString().trim().toLowerCase()
                ) {
                    correct = false;
                    break;
                }
            }
            if (correct) {
                totalCorrect++;
            } else {
                mistakes.push({
                    question: q.question,
                    yourAnswer: userAnswer,
                    correctAnswer: q.answer
                });
            }
        }

    });

    // Score out of 200, minimum 100, maximum 200
    const minScore = 100;
    const maxScore = 200;
    const gedScore = Math.round(minScore + (totalCorrect / questions.length) * (maxScore - minScore));

    // ====== NEW RESULT UI ======
    document.getElementById("ged-score").textContent = gedScore;
    document.getElementById("correct").textContent = totalCorrect;
    document.getElementById("incorrect").textContent = questions.length - totalCorrect;
    document.getElementById("final-score").textContent = gedScore + "/200";

    // Example time (replace with real timer if you track start time)
    document.getElementById("time-taken").textContent = "00:18 / 01:10:00";

    // Status text
    const statusText = document.getElementById("status-text");
    if (gedScore >= 145) {
        statusText.textContent = "Likely to Pass ✅";
        statusText.style.color = "green";
    } else {
        statusText.textContent = "Not Likely to Pass ❌";
        statusText.style.color = "red";
    }

    // Progress bar
    const percent = ((gedScore - 100) / (200 - 100)) * 100;
    const bar = document.getElementById("score-bar");
    bar.style.width = percent + "%";
    bar.style.background = gedScore >= 145 ? "green" : (gedScore >= 134 ? "orange" : "red");

    // Show mistakes if any
    window.examMistakes = mistakes;
    document.getElementById("show-mistakes-btn").style.display = mistakes.length > 0 ? "inline-block" : "none";

    // Show result block
    document.getElementById("result").style.display = "block";
}


// Show Mistakes
function showMistakes() {
    const detailedReport = document.getElementById("detailed-report");
    const mistakesListReport = document.getElementById("mistakes-list-report");
    mistakesListReport.innerHTML = ""; // clear old report

    questions.forEach((q, i) => {
        const userAnswer = answers[q.globalIndex] || "Not answered";

        // Determine correctness consistently with submitExam
        let isCorrect = false;
        if (q.type === "drag-drop") {
            const expected = q.correctPlacement || {};
            const placed = userAnswer || {};
            let ok = true;
            for (let zone in expected) {
                const exp = expected[zone];
                const pl = placed[zone] || [];
                // Only check that all expected IDs are present
                if (!exp.every(id => pl.includes(id))) {
                    ok = false;
                    break;
                }
            }
            isCorrect = ok;
        } else if (q.type !== "er") {
            // normalize string comparison for other question types
            const ua = userAnswer && userAnswer.toString ? userAnswer.toString().trim().toLowerCase() : "";
            const ca = q.answer && q.answer.toString ? q.answer.toString().trim().toLowerCase() : "";
            isCorrect = ua !== "" && ua === ca;
        }

        const questionDiv = document.createElement("div");
        questionDiv.classList.add("mb-3", "p-3", "border", "rounded");
        questionDiv.innerHTML = `
      <h5>Question ${i + 1}</h5>
      <div class="p-2 mb-2" style="background:#f9f9f9; border-radius:6px;">
        ${q.passage || "(No passage for this question)"}
      </div>
      <p><b>Question:</b> ${q.question}</p>
      <p><b>Your Answer:</b> ${prettyAnswer(userAnswer)}</p>
${q.type !== "er" ? `<p><b>Correct Answer:</b> ${q.type === "drag-drop" ? prettyAnswer(q.correctPlacement) :
                q.type === "dropdown" && typeof q.answer === "object" ? prettyAnswer(q.answer) :
                    q.answer
                }</p>` : ""}
      <p style="color:${isCorrect ? "green" : "red"}; font-weight:bold;">
        ${q.type === "er" ? "Extended Response (manual grading needed)" : (isCorrect ? "✔ Correct" : "❌ Mistake")}
      </p>
    `;
        mistakesListReport.appendChild(questionDiv);
    });

    detailedReport.style.display = "block";
}


// Initialize
renderQuestion(currentQuestionIndex);
startSectionTimer();

//highlights    
document.getElementById('highlight-btn').addEventListener('click', function () {
    const passageContainer = document.getElementById('passage-container');
    let selection = window.getSelection();

    if (!selection.rangeCount) return;

    let range = selection.getRangeAt(0);

    // Only operate if selection is inside passage container
    if (!passageContainer.contains(range.commonAncestorContainer)) return;

    // Check if selection is already inside a mark
    let ancestor = range.commonAncestorContainer;
    while (ancestor && ancestor !== passageContainer) {
        if (ancestor.nodeName === 'MARK') {
            // Unhighlight: replace <mark> with its content
            let parent = ancestor.parentNode;
            while (ancestor.firstChild) {
                parent.insertBefore(ancestor.firstChild, ancestor);
            }
            parent.removeChild(ancestor);
            selection.removeAllRanges();
            return;
        }
        ancestor = ancestor.parentNode;
    }

    // Highlight: wrap selection in <mark>
    let mark = document.createElement('mark');
    mark.appendChild(range.extractContents());
    range.insertNode(mark);

    // Clear selection
    selection.removeAllRanges();
});

const passageDiv = document.getElementById("passage-container");
const qDiv = document.getElementById("questions-container");

// Reset flex by default
passageDiv.style.flex = "2";
qDiv.style.flex = "1";

// For Section 2 (ER), make passage wider
if (q.section === 2) {
    passageDiv.style.flex = "1";  // passage takes more space
    qDiv.style.flex = "2";        // questions take less space
}
function saveSection3Answers() {
    const selects = document.querySelectorAll("#passage-container select");
    selects.forEach(sel => {
        answers[sel.name] = sel.value;
    });
    // Display ER answers
    const erContainer = document.getElementById("er-answers").style.display = "none";
    erContainer.innerHTML = ""; // clear previous content
    questions.forEach((q, index) => {
        if (q.type === "er") {
            const userAnswer = answers[index] || "No answer";
            const erDiv = document.createElement("div");
            erDiv.innerHTML = `<strong>Question:</strong> ${q.question}<br>
                           <strong>Your Response:</strong> ${userAnswer}<hr>`;
            erContainer.appendChild(erDiv);
        }
    });


}
// On drop event
function handleDrop(e, zoneId, questionIndex) {
    e.preventDefault();
    const itemId = e.dataTransfer.getData("text");
    const item = document.getElementById(itemId);
    const dropZone = document.getElementById(`drop-${zoneId}`);

    dropZone.appendChild(item);

    // Save dropped items in answers object
    if (!answers[questionIndex]) answers[questionIndex] = {};
    if (!answers[questionIndex][zoneId]) answers[questionIndex][zoneId] = [];

    if (!answers[questionIndex][zoneId].includes(itemId)) {
        answers[questionIndex][zoneId].push(itemId);
    }
}

// Separate function to render ER answers
function showERAnswers() {
    const erContainer = document.getElementById("er-answers");
    erContainer.innerHTML = ""; // clear previous content
    questions.forEach((q, index) => {
        if (q.type === "er") {
            const userAnswer = answers[index] || "No answer";
            const erDiv = document.createElement("div");
            erDiv.innerHTML = `<strong>Question:</strong> ${q.question}<br>
                               <strong>Your Response:</strong> ${userAnswer}<hr>`;
            erContainer.appendChild(erDiv);
        }
    });
}
function showDetailReport() {
    const detailedReport = document.getElementById("detailed-report");
    const mistakesListReport = document.getElementById("mistakes-list-report");
    const erAnswersReport = document.getElementById("er-answers-report");

    mistakesListReport.innerHTML = ""; // clear old report
    erAnswersReport.innerHTML = ""; // clear old ER content

    questions.forEach((q, i) => {
        const userAnswer = answers[i] || "Not answered";
        let isCorrect = false;
        if (q.type === "drag-drop") {
            const expected = q.correctPlacement || {};
            const placed = userAnswer || {};
            let ok = true;
            for (let zone in expected) {
                const exp = expected[zone];
                const pl = placed[zone] || [];
                // Only check that all expected IDs are present
                if (
                    exp.length !== pl.length ||
                    !exp.every(id => pl.includes(id))
                ) {
                    ok = false;
                    break;
                }
            }
            isCorrect = ok;
        } else if (q.type !== "er") {
            const ua = userAnswer && userAnswer.toString ? userAnswer.toString().trim().toLowerCase() : "";
            const ca = q.answer && q.answer.toString ? q.answer.toString().trim().toLowerCase() : "";
            isCorrect = ua !== "" && ua === ca;
        }

        // Create wrapper
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("mb-3", "p-3", "border", "rounded");

        // Build report for this question
        questionDiv.innerHTML = `
            <h5>Question ${i + 1}</h5>
            <div class="p-2 mb-2" style="background:#f9f9f9; border-radius:6px;">
                ${q.passage || "(No passage for this question)"}
            </div>
            <p><b>Question:</b> ${q.question}</p>
            <p><b>Your Answer:</b> ${prettyAnswer(userAnswer)}</p>
${q.type !== "er" ? `<p><b>Correct Answer:</b> ${q.type === "drag-drop" ? prettyAnswer(q.correctPlacement) :
                q.type === "dropdown" && typeof q.answer === "object" ? prettyAnswer(q.answer) :
                    q.answer
                }</p>` : ""}
            <p style="color:${isCorrect ? "green" : "red"}; font-weight:bold;">
                ${q.type === "er" ? "Extended Response (manual grading needed)"
                : (isCorrect ? "✔ Correct" : "❌ Mistake")}
            </p>
        `;

        if (q.type === "er") {
            // Append ER questions separately
            erAnswersReport.appendChild(questionDiv);
        } else {
            // Append MCQ / regular questions
            mistakesListReport.appendChild(questionDiv);
        }
    });

    detailedReport.style.display = "block";
}
