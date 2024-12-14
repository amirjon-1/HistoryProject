const map = L.map('map', { scrollWheelZoom: false }).setView([42.7128, -73.2032], 6);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);


const points = [
    {
        "name": "The Hudson River Valley And Albany",
        "coords": [42.3870, -73.7075],
        "content": "<p>The Hudson River Valley was an important part of Mohican life as it provided rich resources for hunting, fishing, and farming. It was a place of high spiritual significance, with several sacred sites along the riverbank. Despite being forced to leave this place, the region continues to be a key part of Mohican heritage. Many descendants still visit the valley to connect to their ancestors and culture. Along the same area, Albany served as an equally important area for the Mohican community. It was a site of political and cultural negotiations between the colonists and the Mohican people. It was a place of negotiating treaties and trade agreements. Despite it being an area of great loss and pain for the Mohicans, it remains an important location for the Mohican community for its history. It is also one of the bigger sites of ongoing repatriation and cultural preservation initiatives. </p><img src='ss.png' alt='Hudson River Valley'>"
    },
    {
        "name": "Sacred Burial Grounds",
        "coords": [42.2887, -73.3204],
        "content": `
            <p>
            The Mohican people originally inhabited western Massachusetts and the Connecticut River Valley regions. These lands were vital for their survival as it was both a source of food and culture. The indigenous people highly respected the land as it was a form of knowledge and culture for them. This is also where the Mohican burial grounds are located, which are deeply sacred spaces where ancestors are honored. These grounds symbolized cycles of life and renewal which maintained the spiritual balance in the community. However due to colonization, many graves were destroyed, artifacts were stolen and the land was repurposed for farming and industrial purposes. Due to this the tribe faced disease, displacement and many acts of violence. Their territory shrank significantly, leading to a long period of displacement. The destruction of these lands is another act of colonial erasure, however repatriation efforts have been working towards solving these issues. The land acknowledgment by Williams college, artifact retrieval efforts, and other actions have been slowly rebuilding the Mohican cultural identity. The image below is an old photo of one of the sacred burial sites. 
            </p>
            <img src="burial.jpg" alt="Art depicting sacred burial grounds" style="width: 100%;">
        `
    },

    {
        "name": "First Encounters with Dutch Traders and The Treaty of Albany",
        "coords": [42.6526, -73.7562],
        "content": `
            <p>
            In the early 1600s, Mohican people started to trade with Dutch settlers along the Hudson River, exchanging Wampum beads, belts, and other goods for European tools and firearms. These trades disrupted the traditional Mohican lifestyle and made them dependent on foreign goods. They stopped producing their tradtional goods and just relied on the ones sold by settlers. The settlers took control of this dependency which led to escalating tensions between them. Despite the Mohican people approaching the colonists on good terms, the exploitative nature of colonial systems destabilized the Indigenous society. Due to these tensions, the Treaty of Albany was established to restore peace between the two communities, but it rather led to settlers taking more land from the Mohicans. The treaty was violated multiple times, which forced the Mohican community to be displaced. The treaty was created to support settler interests, exploiting the Mohican community. The image below records a trade between a Mohican community member and a Dutch trader. 
            </p>
            <img src="trade.jpg" alt="Art depicting Mohican trade with settlers" style="width: 100%;">
        `
    },
    {
        "name": "Housatonic Valley Treaty (1736) and Loss of Housatonic Homelands",
        "coords": [42.1134, -73.3546],
        "content": `
            <p>
            Around the mid 1700s, the Mohicans signed the Housatonic Valley Treaty, which gave most of their homeland to settlers. Settlers promised compensation and protection, but it was never fulfilled. Sacred sites and villages were repurposed into farms and towns, moving the Mohican community out of their villages. There is a very big difference in how colonists and Mohicans viewed the land. Colonists believed it was just property that can be sold and altered. However Mohicans had a deep cultural connection to it. It was a part of their identity and when they were kicked out, they left a part of them behind. The only thing that kept this part of their culture alive was through oral tradition passing it down generations. The image below is from a news article that talks about how the Mohican leaders dedicated multiple crossing signs throughout the area with respect to Native language.

            </p>
            <img src="houstanik.jpg" alt="houstanik valley" style="width: 100%;">
        `
    },
    {
        "name": "Stockbridge Mission",
        "coords": [42.2870, -73.3192],
        "content": `
            <p>
            Around the 1740s, the Stockbridge Mission was established to convert Mohican people to Christianity. This disrupted the original cultural practices, replacing them with European religious customs. Some Mohicans adopted Christianity, but others continued to resist, preserving their traditional beliefs. This shows how colonists used religion as a tool for control, but it also shows the resilience of the Mohican people, who continued to preserve their culture despite pressures. The bible was translated into native languages and taught in schools, but people who didn't convert were often faced with oppression. The two images below both show this mission. The first one is the first page of the translation of the bible. The second is a missionary trying to convert a native american by teaching the bible.
            </p>
            <img src="bib.jpg" alt="bible in native language" style="width: 100%;">
            <img src="bbib.jpg" alt="bible in native language" style="width: 100%;">

        `
    },
    {
        "name": "Stockbridge and Berkshire Hills, Massachusetts",
        "coords": [42.2875, -73.3203],
        "content": "<p> Throughout the 1750s, the Mohican people were shifted a lot throughout Stockbridge, MA, “under British protection”. They were able to settle in different places for a bit and continue their practices, but settlers started to take over each part very quickly. The conflict grew bigger forcing the Mohicans to move continously due to colonial pressure. Similarly, the Berkshire Hills were a critical part of Mohican territory and culture. It was essential for hunting and cultural practices, but with colonists taking over they lost access to sources of food and sacred sites. With no chances of survival and continued discrimination they were forced to relocate. Both Stockbridge and the Berkshire region remain culturally significant to Mohican descendants and they have been trying to reclaim the cultural connection they once had to the region. The image below is a modern day tour of one of the houses from the colonizers in the area.  </p> <img src='s.jpg' alt='stockbridge mohican place'>"
    },       
    {
        "name": "New Stockbridge, New York",
        "coords": [42.9167, -75.9150],
        "content": "<p>By the late 1700s, many Mohicans relocated to New York, establishing New Stockbridge as their new home. However, due to increasing settler population and greed, the Mohicans faced constant pressure from fraudulent land sales and assimilation efforts into European lifestyle. The tribe leader fought against the pressure by the colonial government and asked for protection and fair treatment, but their needs weren’t met. They were forced to move further west with many other Native American groups. </p><img src='ny.jpg' alt='New Stockbridge area'>"
    },

    {
        "name": "Forced Relocation to Wisconsin and Menominee Reservation",
        "coords": [44.9698, -88.7185],
        "content": `
            <p>
            In the 1820s, the Mohican tribe was forced to relocate to Wisconsin, and this path is often referred to as the Trail West which was marked by starvation, disease, and death. They had a hard time adjusting to the environment due to the territory being too harsh for farming and there was still continued pressure from U.S. policies. Despite this, the Mohican people were able to adapt and continued to thrive through building community and continuing to preserve their language and culture. This relocation was sort of like another start for their tribe after displacement and pain. Wisconsin remains an important location for all generations of Mohicans. The place that is pointed on the map is the Menominee Reservation. The Menominee were another tribe known for their hospitality and they provided the Mohican community with a lot of support. The two tribes shared a lot of cultural ties, sticking together to resist pressure from the US government. The Menominee Reservation became a place where Mohican people could continue their traditions and pass them down. To this day the two tribes still have a strong connection. Western maps don't ackowledge the fact that the land belonged to the Mohicans and it has to be altered to show that fact like in the one below. 
            </p>
            <img src="trail.jpg" alt="Art depicting the Trail West" style="width: 100%;">
        `
    },
    {
        "name": "The Stockbridge-Munsee Reservation, Wisconsin",
        "coords": [44.9182, -88.8607],
        "content": "<p>When Roosevelt passed the Indian Reorganization Act and gave funding to the native groups, the Mohicans were able to reorganize. The Stockbridge-Munsee Reservation in Wisconsin is the current home of the Stockbridge-Munsee Band of Mohicans. This land stands as a symbol for the tribe's hardships and resilience through many years of displacement. The reservation serves as a space for cultural repatriation efforts, including language programs that teach the younger generations and other community events. The Mohican community has worked to make sure their identity continues to thrive and be passed down despite ongoing challenges from external forces. The reservation is also an economic center for the Mohican community for them to fund their efforts to preserve the culture. The Stockbridge-Munsee people continue to advocate for the rights they deserve as a sovereign nation, and many of their efforts have turned to success. There is an image below of one the places in this reservation. The video describes the efforts the community has been working on to connect back to their homelands. </p> <img src='sto.jpg' alt='Stockbridge-Munsee Reservation'><iframe width='560' height='315' src='https://www.youtube.com/embed/R6Cx7kFTjIA?si=E57YcFmwUVQVEMrC' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' referrerpolicy='strict-origin-when-cross-origin' allowfullscreen></iframe>"
    },

    
    {
        "name": "Williams College, Williamstown, Massachusetts",
        "coords": [42.7110, -73.2037],
        "content": "<p>Williams College has long been an institution that has engaged with Native American issues. The students and college have been involved in preserving Mohican history through academic programs and direct collaboration with the Mohican community. They have raised awareness to the fact that “We are on Mohican Homelands”, which has in turn helped with repatriation efforts. The Mohican community (along with other Native groups) has faced multiple injustices and the efforts shown by both Williams students and faculty have helped educate many other people on campus (me included) of these struggles. Williams college has respectfully given a Land Acknowledgement to the Mohicans saying that the campus is located on their homelands. This is an important action for the Mohicans because it gave them back a part of their identity. These land acknowledgements have been slowly increasing throughout the nation and hopefully continue. Students have created <a href='https://diversity.williams.edu/files/2023/12/SMC-in-Williamstown-booklet-version-2-final.pdf' target='_blank'> booklets</a> and other forms of media to help with repatriation efforts.</p><img src='image (1).png' alt='Williams College'>"
    },{
        "name": "Papscanee Island Restoration",
        "coords": [42.6067, -73.7371],
        "content": `
            <p>
             Papscanee Island, is a sacred Mohican site along the Hudson river and it is now the focus of restoration and Land Back efforts. Tribal leaders are working to protect the island’s environment, ecology, and cultural significance. They are working to ensure it remains a vital part of Mohican heritage. It is currently a Nature Preserve owned directly by the Stockbridge-Munsee community. The Island contains multiple species that are held with high importance to the Mohican community and its restoration has been a huge step for Mohican cultural repatriation. 	
            </p>
            <img src="image (2).png" alt="Papscanee Island" style="width: 100%;">
        `
    },
  
       
];


const curves = points.slice(0, -1).map((point, i) => {
    const nextPoint = points[i + 1];

    const midLat = (point.coords[0] + nextPoint.coords[0]) / 2;
    const midLng = (point.coords[1] + nextPoint.coords[1]) / 2;

    const offset = 0.3; 
    const deltaLat = nextPoint.coords[0] - point.coords[0];
    const deltaLng = nextPoint.coords[1] - point.coords[1];
    const offsetLat = -deltaLng * offset; 
    const offsetLng = deltaLat * offset;

    const controlPoint = [midLat + offsetLat, midLng + offsetLng];

    return [
        'M',
        point.coords,
        'Q',
        controlPoint, 
        nextPoint.coords, 
    ];
});


curves.forEach((path) => {
    L.curve(path, {
        color: '#555',
        weight: 4, 
        dashArray: '8, 12', 
    }).addTo(map);
});

let currentIndex = 0;
let markers = [];

function updateMap(index) {
    const point = points[index];
    map.flyTo(point.coords, 15, {
        duration: 1.5, 
        easeLinearity: 0.25, 
    });

    document.getElementById('point-title').textContent = `${point.name}`;
    document.getElementById('point-content').innerHTML = point.content;

    markers.forEach((marker, i) => {
        if (i === index) {
            marker.setIcon(L.icon({ iconUrl: 'human.png', iconSize: [25, 41] }));
        } else {
            marker.setIcon(L.icon({ iconUrl: 'location.png', iconSize: [25, 41] }));
        }
    });
}

points.forEach((point, index) => {
    const marker = L.marker(point.coords, {
        icon: L.icon({ iconUrl: 'images/marker.png', iconSize: [25, 41] })
    }).addTo(map);
    marker.on('click', () => {
        currentIndex = index;
        updateMap(currentIndex);
    });
    markers.push(marker);
});

updateMap(currentIndex);

document.addEventListener('keydown', event => {
    if (event.key === 'ArrowRight') {
        currentIndex = (currentIndex + 1) % points.length;
        updateMap(currentIndex);
    } else if (event.key === 'ArrowLeft') {
        currentIndex = (currentIndex - 1 + points.length) % points.length;
        updateMap(currentIndex);
    }
});




    
   