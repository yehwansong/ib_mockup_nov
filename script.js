
$(document).ready(function(){




new_db = [
	[	
	//30
		"It was the idea to do something like that because it just doesn't exist.^^CRIP MAGAZINE, EVA EGERMANN$$https://www.p-art-icipate.net/projektnews/interview-mit-eva-egermann/",
		"Art is a value in itself, creates space and food for thought.^^CRIP MAGAZINE, EVA EGERMANN$$https://www.p-art-icipate.net/projektnews/interview-mit-eva-egermann/",
		"It’s then about sustaining the conversation^^I/E by TAREK ATOUI$$https://thequietus.com/articles/29432-tarek-atoui-cycles-in-11-sharjah-biennial-interview",
		"We use the art world as a platform to start a conversation^^ISTANBUL BUFFALOES PROJECT by COOKING SECTIONS$$https://www.frieze.com/article/eating-end-world",
		"invitation to appropriate the project and transform it.^^ISTANBUL BUFFALOES PROJECT by COOKING SECTIONS$$https://www.artnews.com/art-in-america/interviews/food-studies-a-conversation-with-cooking-sections-56484/",
		"a discursive space, in the knowledge that archives are unstable and incomplete^^NEPAL FEMINIST MEMORY by the NEPAL PICTURE LIBRARY$$https://www-tandfonline-com.libproxy1.nus.edu.sg/doi/pdf/10.1080/17514517.2019.1654245?needAccess=true",
		"It's a language that you can use, and just jumping into that language is a very rich form.^^JOHN BELL$$https://www.listennotes.com/podcasts/puppet-podcast/episode-20-john-bell-puppet-qWy6SjeoMK0/",
		"<span>a different kind of</span> <span>epistemology, that <span>reconnects us to other</span> <span>ways of knowing the</span> <span>human-nature symbiosis</span>^^INDIGENOUS UNIVERSITY, URSULA BIEMANN$$https://www.youtube.com/watch?v=GDv47X9q5q0",
		"<span>It is less about art than</span> <span>it is about being artists</span> <span>and being human again—</span> <span>and questioning what that means</span> <span>in our current context.</span>^^GREEN PAPAYA$$https://aaa.org.hk/en/ideas/ideas/green-papaya-art-projects-why-artist-run-spaces",
		"<span>it encourages the state of</span> <span>potentiality, the state of</span> <span>being pure potential.</span>^^GREEN PAPAYA$$https://www.mmtimes.com/news/mervespina-and-green-papaya-art-projects.html",
	],[
	// 100
	    "“The material already says half of what I wanted to say. We need to let the material speak.”^^SHEELA GOWDA$$https://artradarjournal.com/2018/02/05/art-ritual-and-the-everyday-at-m-reorient-conversations-on-south-and-southeast-asia-part-ii-talk-summary-of-artist-sheela-gowda/",
	    "“Art needs to dominate the means of production that industry dominates.”^^ATIF AKIN$$https://www.youtube.com/watch?v=L5v-8Q4xGH4"
	],[
	// 200
	    "“I understood the message [of the forest] to be that respect and reciprocity are fundamental and universal values necessary to achieve a fulfilled and happy life.”^^LAURA ANDERSON BARBATA$$https://www.youtube.com/watch?v=zRzYfaUCCXI",
	    "“I am an artist. And I decided to ground my practice in the creation of works that find their purpose in the social realm through group participation.”^^LAURA ANDERSON BARBATA$$https://www.youtube.com/watch?v=zRzYfaUCCXI",
	    "“It's [the project] not strongly related to the tsunami. It's strongly related to Kitakama village.”^^LIEKO SHIGA$$https://www.sfmoma.org/watch/lieko-shiga-kitakama-village-and-2011-tsunami/",
	    "“We can think of the university as a healing practice for the territory, that has been injured by colonial intervention, extractivist projects, and by epistemological occupation.” ^^INDIGENOUS UNIVERSITY, URSULA BIEMANN $$https://www.youtube.com/watch?v=GDv47X9q5q0",
	    "“It is not a project that happens 'over there'. It has very much to do with Western institutions of learning.” ^^INDIGENOUS UNIVERSITY, URSULA BIEMANN $$https://www.youtube.com/watch?v=GDv47X9q5q0",
	    "“‘We are not oyster fishermen or citrus growers or lawyers,’ said Schwabe. ‘But we bring people together with different expertise to have discussions across political and environmental horizons.’”^^ISTANBUL BUFFALOES PROJECT by COOKING SECTIONS$$https://www.frieze.com/article/eating-end-world",
	    "[article was on the Oyster Table project by Cooking Sections: included a collaboration with restaurants as well]^^ISTANBUL BUFFALOES PROJECT by COOKING SECTIONS$$https://www.frieze.com/article/eating-end-world",
	    "“Art is a value in itself, creates space and food for thought. And this freedom - apart from economic usability and marketing - is urgently needed.”^^CRIP MAGAZINE, EVA EGERMANN$$https://www.p-art-icipate.net/projektnews/interview-mit-eva-egermann/",
	    "“...the role of the curator in facilitating an ecology of practices between various disciplines” e.g artists, theorists, scientists Knowledge as produced under different conditions ^^BLUE PERIL, INTERPRT$$https://www.youtube.com/watch?v=NKREFr_Wtc4",
	    "<span class='question-2'>TDR: Why did you name your theatre Bread & Puppet?</span>SCHUMANN: Bread means bread. Something basic. We give it out during or after the show.<span class='question-2'>TDR: Why?</span>SCHUMANN: We would like to be able to feed people.^^BREAD AND PUPPET THEATRE$$https://www.jstor.org/stable/1125318",
	    "“The traveling puppet shows range<br>from tightly composed theater<br>pieces presented by members<br>of the company to extensive<br>outdoor pageants<br>which require the<br>participation of<br>many<br>volunteers.”^^BREAD AND PUPPET THEATRE$$https://breadandpuppet.org/"
	],[
	// 300
	    "&nbsp;“When I use language,<br>I'm aware of the materiality of it.<br>It has to translate into something<br>texturally, in material - so that with the<br>mats, they're really a quite literal<br>means of interweaving the language<br>within the concept.”^^NEWELL HARRY$$https://www.youtube.com/watch?v=GOkj7-gWPJo",
	    "“Collection remains a<br>large aspect of what I do. I mean,<br>I'm more interested in how certain things<br>get to be where they are, and the narratives behind them - so I'm interested not necessarily in the object itself,<br>but the story behind that.”^^NEWELL HARRY$$https://www.youtube.com/watch?v=QoQpo2LYFgU",
	    "'Handling a material<br>makes me understand its limitations<br>and its potential. So at the level of ideas I know what is feasible and what is not. Proximity to the material defines the formal aspects of the work and its tangibility. I therefore do not outsource the<br>physical aspect of art-making.'^^SHEELA GOWDA$$https://www.afterall.org/publications/journal/issue.22/the.specific.labour.of.sheela.gowda#cite3603",
	    "“...I invite you to look<br>at your surroundings with<br>new eyes. Listen and learn with<br>the spirit of sharing. It's an exercise of reciprocal appreciation.<br>Let's all learn together: me from you, and<br>you from me. Just like seeds that<br>sprout, this never ends.”^^LAURA ANDERSON BARBATA$$https://www.youtube.com/watch?v=zRzYfaUCCXI",
	    "Art needs to “update its<br>own techniques as fast as the<br>industry or politics in order to be able<br> to respond to all of this, to produce<br> somethingabout these social codes or<br>to say something about the<br>historical field.”^^ATIF AKIN$$https://www.youtube.com/watch?v=L5v-8Q4xGH4",
	    "“...My relationship to<br>the ocean is one of love and care.<br>Even before being an artist, I'm an<br>indigenous landowner, and with that<br>comes an enormous respect and care -<br>but also a concern for our oceans<br>at the moment.”^^TALOI HAVINI$$https://www.youtube.com/watch?v=iIkl9-6qINk",
	    "“I think research<br>is collaborative, so it's<br>all these intersecting ideas of what<br>research is; how science and art come<br>together. It's this whole community of<br>experiences that will feed in, I think,<br>to my work.”^^TALOI HAVINI$$https://www.youtube.com/watch?v=M6yoT-CXey4",
	    "“The name 'spiral shore'<br>also refers to the spiral of our DNA.<br>If we trace the spiral, we can encounter<br>the lives of the people before and after<br>our time. That's what I hoped to convey<br>when I titled the series Spiral Shore<br>(Rasen Kaigen).”^^LIEKO SHIGA$$https://www.sfmoma.org/watch/lieko-shiga-kitakama-village-and-2011-tsunami/",
	    "“Though photography is a<br>visual art, I thought that maybe photos<br>could actually portray a world we could not<br>see with the naked eye. Perhaps the spirit or<br>the history of Kitakama - something that we cannot see - the thing that brought this<br>community together, the big picture.”^^LIEKO SHIGA$$https://www.sfmoma.org/watch/lieko-shiga-kitakama-village-and-2011-tsunami/",
	    "“A history of women, in our<br>opinion, is first and foremost a social<br>history. We have curated this exhibition as a<br>call to contribute to the archive we have<br>started building. We seek and welcome more<br>materials that will help us achieve this mission<br>of a more inclusive history—and future<br>—of Nepal.”^^NEPAL FEMINIST MEMORY by the NEPAL PICTURE LIBRARY$$https://kathmandupost.com/miscellaneous/2018/10/13/the-public-life-of-women",
	    "<span class='question-1'>DN: What do you hope people will take away [..] from engaging or participating in the improvisational music that's happening?</span>TA: Maybe the most important thing for me is to have the feeling that we shared something we cannot speak about. A moment that is undescribable.^^I/E by TAREK ATOUI$$https://marfapublicradio.org/blog/west-texas-talk/artist-and-composer-tarek-atoui/",
	    "2. Selain itu, sejak awal saya ingin memberikan karakter lokal dengan gerakan Pustaka Bergerak. Karena Pustaka Bergerak ini bukan hanya gerakan literasi, tapi kultural yang menonjolkan aspirasi para relawannya. Kami ingin masyarakat bangga dengan budaya lokalnya.^^DONKEY LIBRARY, NIRWAN AHMAD ARSUKA$$https://www.suara.com/wawancara/2017/07/03/070000/nirwan-arsuka-pustaka-bergerak-buru-pembaca-ke-pelosok-negeri?page=all",
	    "Kini, kembali seluruh<br>relawan diundang untuk jadi<br>seniman. Yang mengundang kali ini<br>adalah penyelenggara Istanbul Bienal, Turki. Karya relawan yang memikat bukan hanya akan dapat dinikmati oleh warga Indonesia, atau Turki saja, tapi<br>oleh seluruh dunia.^^DONKEY LIBRARY, NIRWAN AHMAD ARSUKA$$https://www.facebook.com/pg/pustakabergerak.id/posts/"
	],[
	// 400
		[
	    "<span>An</span>\
			<span>attempt to</span>\
			<span>translate Isaïe</span>\
			<span>Nzeyimana's work</span>\
			<span>(which has only been written</span>\
			<span>and published in French i.e limited</span>\
			<span>reach) from a variety of backgrounds and</span>\
			<span>interests - make philosophy do something else</span>\
			<span>than what it's supposed to do i.e on disciplinary grounds</span>\
			<span><span class='quote'>(28:44-29:47)</span>Isaïe Nzeyimana having read the</span>\
			<span>more Christian philosophies having been</span>\
			<span>educated in the convents (Rwandan</span>\
			<span>school system)</span>^^CHRISTIAN NYAMPETA$$https://soundcloud.com/e_flux/sohrab-mohebbi-and-christian\
			",
	    "<span>This is</span>\
			<span>actually a</span>\
			<span>Rwandan proverb.</span>\
			<span>[...] Proverbs are not</span>\
			<span>maxims, aphorisms, axioms, or</span>\
			<span>adages that could constitute some</span>\
			<span>kind of Rwandan Holy Book of good</span>\
			<span>observance. For the scholarship I learn from, they</span>\
			<span>simply mark the limits of the knowable. And, to me,</span>\
			<span>these limits can be diagramed in terms of modes of</span>\
			<span>existence marked by a rhythm of giving-</span>\
			<span>receiving-giving.</span>^^CHRISTIAN NYAMPETA$$https://contemporaryand.com/magazines/how-to-live-together/",
	    "<span>“The</span>\
			<span>moment of</span>\
			<span>transformation -</span>\
			<span>when something is very</span>\
			<span>definitive, there's not much</span>\
			<span>more to say about it.</span>\
			<span>When you find</span>\
			<span>something that's in that moment of being</span>\
			<span>and not-being, or becoming, I think that's far more</span>\
			<span>challenging and interesting</span>\
			<span>to actually appropriate for</span>\
			<span>what you want to say.”</span>^^SHEELA GOWDA$$https://www.youtube.com/watch?v=AA28QmJTap0",
	    "<span>“The</span>\
			<span>works’</span>\
			<span>material presence</span>\
			<span>is significant because</span>\
			<span>Gowda’s physically intensive</span>\
			<span>installations and paintings comment</span>\
			<span>on precisely those aspects of contemporary</span>\
			<span>labour practices that are often</span>\
			<span>withheld from visibility:</span>\
			<span>whether the living conditions</span>\
			<span>of migrant</span>\
			<span>workers or the treatment</span>\
			<span>of India’s women.”</span>^^SHEELA GOWDA$$https://www.frieze.com/article/sheela-gowdas-material-politics",
	    "<span>&nbsp;</span>\
	    	<span>”...pasti</span>\
			<span>saya</span>\
			<span>mengangkat ide</span>\
			<span>tentang pluralisme di dalam</span>\
			<span>bentuk karya. Saya ingin</span>\
			<span>menungkapkan bagaimana kebudayaan</span>\
			<span>di sini yang bersifat [...] terbuka dan pluralisis</span>\
			<span>sejak dulu - dari teribu tahun lebih - </span>\
			<span>itu menerima semua budaya maupun keyakinan </span>\
			<span>dan mengambil hal yang positif</span>\
			<span>dari sana selalu menggabungkannya</span>\
			<span>menjadi sesuatu pendekatan</span>\
			<span>yang sifatnya plural dan</span>\
			<span>sincretisme.</span>^^ARAHMAIANI FEISAL$$https://www.youtube.com/watch?v=FOZ2y_Sg9ak",
	    "<span> “[the</span>\
			<span>work]</span>\
			<span>depicts the artist’s</span>\
			<span>fascination and</span>\
			<span>long-term experimentation with</span>\
			<span>symbolism and the syncretism of</span>\
			<span>culture of her native Java. It’s an</span>\
			<span>uncompromising work designed to shock with its</span>\
			<span>Hindu images of male and female genitalia. With</span>\
			<span>Malay-Arabic letters saying “Nature is a book”, it has an</span>\
			<span>inscription about King Purnawarman</span>\
			<span>of the first Hindu kingdom in</span>\
			<span>Java.”</span>^^ARAHMAIANI FEISAL$$https://www.prestigeonline.com/id/people-events/people/artist-arahmaiani-tell-us-some-uncomfortable-truths/",
	    "<span>“[...] It</span>\
			<span>is very</span>\
			<span>important to me</span>\
			<span>that the bridges built</span>\
			<span>between communities–the</span>\
			<span>personal ties and experiences</span>\
			<span>gained–continue far beyond each project.</span>\
			<span>Art is the vehicle, the pretext for</span>\
			<span>a conversation and for an exchange</span>\
			<span>of ideas that incorporate the</span>\
			<span>material as well as the personal</span>\
			<span>for its execution.”</span>^^LAURA ANDERSON BARBATA$$https://firstindigoandlifestyle.com/2016/07/26/artist-in-focus-laura-anderson-barbata/",
	    "<span>&nbsp;</span>\
	    	<span>‘“Upon</span>\
			<span>hearing her story, I</span>\
			<span>felt that my duty as a</span>\
			<span>Mexican female artist, and as a</span>\
			<span>human being, was to do everything</span>\
			<span>possible to have Pastrana removed from the</span>\
			<span>anatomy collection and returned to Mexico, her</span>\
			<span>place of birth — where she was at the time practically</span>\
			<span>unknown — to receive a proper burial,”</span>\
			<span>artist Laura Anderson</span>\
			<span>Barbata told Hyperallergic.’</span>^^LAURA ANDERSON BARBATA$$https://hyperallergic.com/421575/artist-repatriation-of-julia-pastrana/",
				    "<span>“It’s</span>\
			<span>been more</span>\
			<span>than 10 years, and</span>\
			<span>I sometimes still get</span>\
			<span>emotional about how this</span>\
			<span>whole nuclear history is so prevalent</span>\
			<span>in many places in the world and still not</span>\
			<span>spoken about,” Akin said. “Of course art is</span>\
			<span>something to enjoy, but the content is not always</span>\
			<span>enjoyable. But we have to talk</span>\
			<span>about these tragedies and</span>\
			<span>traumas and catastrophes</span>\
			<span>they are important subjects</span>\
			<span>of art.”</span>^^ATIF AKIN$$https://www.bupipedream.com/ac/113521/mutant-space-utilizes-interactive-technology-to-highlight-nuclear-radiation/",
	    	"<span>&nbsp;</span>\
			<span>‘Because of</span>\
			<span>the somewhat</span>\
			<span>controversial nature of</span>\
			<span>his works, which deal with the</span>\
			<span>conflict between Turkey and Armenia,</span>\
			<span>Akin said he believes art is the best way to</span>\
			<span>communicate his thoughts free of</span>\
			<span>politics or bias from the press.</span>\
			<span>“I think contemporary art is the only</span>\
			<span>venue that can really host freedom of</span>\
			<span>speech and critical</span>\
			<span>thinking,” Akin said.’</span>^^ATIF AKIN$$https://www.bupipedream.com/ac/113521/mutant-space-utilizes-interactive-technology-to-highlight-nuclear-radiation/",
				    "<span>“I'm</span>\
			<span>indigenous</span>\
			<span>to the Pacific,</span>\
			<span>which is the Coral Sea.</span>\
			<span>Our idea of space and time isn't</span>\
			<span>about looking at a surface, drawing it,</span>\
			<span>and then having an artefact with lots of</span>\
			<span>data sets and layers. Our idea</span>\
			<span>of mapping is through storytelling</span>\
			<span>and the observation of our world and the</span>\
			<span>environment around us.”</span>^^ATIF AKIN$$https://www.bupipedream.com/ac/113521/mutant-space-utilizes-interactive-technology-to-highlight-nuclear-radiation/",
			],[
	    "on the title ‘Human Spring’: “According to Shiga, S-chan’s [a farmer from Kitakama] particular strain of mania always coincided with the change in seasons; his “super high” marked the onset of spring, which arrives so suddenly in Tohoku that “the body must respond before the heart,” Shiga said. “He was the spring itself.”^^LIEKO SHIGA$$https://aperture.org/editorial/lieko-shiga-amanda-maddox/",
	    "“One of the core ideas of the university as a decolonial exercise is to foreground how important it is for education to encounter the Other as mind. What indigenous knowledge intends to teach, and the Inga, in particular, is that the Other is mind. The Other is person. That we co-emerge in the relationship with the Other.”^^INDIGENOUS UNIVERSITY, URSULA BIEMANN$$https://www.youtube.com/watch?v=GDv47X9q5q0",
	    "“Puppet, mask, and performing object theatre has deep roots connecting a vast array of contemporary and ancient performance practices. The usefulness of writing about and analyzing these practices, and the theories behind them, will increase our ability to link worldwide traditions with worldwide innovations.”^^JOHN BELL$$https://www-jstor-org.libproxy1.nus.edu.sg/stable/pdf/1146765.pdf?refreqid=excelsior%3A2438f914a2be13b2feead94159ed7291",
	    "“As such, the Library operates as a discursive space, in the knowledge that archives are unstable and incomplete, and that archival gaps are not deficiencies, but can create opportunities for dialogue.”“Women and men are the ones who create history but because history is not written by women, they are not mentioned…,” [Prof. Berktay] says. “A special effort is needed to reveal women’s history.”^^NEPAL FEMINIST MEMORY by the NEPAL PICTURE LIBRARY$$https://www.aa.com.tr/en/turkey/istanbul-s-priceless-womens-archive-goes-digital/525154",
	    "FULLERTON: That sounds like you’re offering a “solution.”COOKING SECTIONS: We don’t think we provide solutions because we don’t have them. Our social and political interventions question and problematize certain situations. By drawing attention to various situations we are complicating them and making people take more responsibility.^^ISTANBUL BUFFALOES PROJECT by COOKING SECTIONS$$https://www.artnews.com/art-in-america/interviews/food-studies-a-conversation-with-cooking-sections-56484/",
	    "“As Fernández Pascual says: ‘We use the art world as a platform to start a conversation. But it doesn’t stay there. The goal is to mobilize a series of actions in collaboration with residents and communities that bring change.’“FULLERTON: Each buyer of your The Empire Remains Shop must sign a franchise agreement. Is this to encourage people to take an active stake in your project?^^ISTANBUL BUFFALOES PROJECT by COOKING SECTIONS$$https://www.artnews.com/art-in-america/interviews/food-studies-a-conversation-with-cooking-sections-56484/",
	    "“The photographers in the West were photographing someone else’s struggle,” [Shahidul Alam] said. “I was an activist taking photographs of my own movement. The political stories I was trying to tell are much more complex than the tightly packaged stories of Western photographers. Class issues, issues of religion, environmental issues, are all part of it.”^^SYNTHESIS by Pathsala South Asian Media Institute$$https://www.nytimes.com/2019/12/23/arts/design/shahidul-alam-rubin-museum.html",
	    "[on putting together Waters' Witness] “...a lot of the decisions on how elements are placed and in dialogue with each and with the space came from listening to the material one by one. So, listening to each stone, listening to the rails, and seeing how these elements are transmitting and emitting sound.”^^I/E by TAREK ATOUI$$https://fridericianum.org/tarek-atoui-interview/",
	    "[on establishing the mechanised mangrove exhibit through a collaborative trial and error] ...it's not about this mangrove moving perfectly, it's about all of us coming together and obsessing about this machine, for months. It's about a way of thinking. If we talk about all these issues; we need to come together — it's not one person that's gonna save the world.^^FISHERFOLKS DAY by MARTHA ATIENZA$$https://www.adobomagazine.com/the-magazine/martha-atienzas-equation-of-state-using-video-art-and-island-technology-to-illuminate-the-effects-of-climate-change-in-bantayan-islands-coastal-communities-and-the-importan/",
	    "Masalahnya, ide nyentriknya ini tentu tidak bisa dilakukannya seorang diri. Berbagai kendala dihadapinya terutama untuk mencari mereka yang mau menggerakan kuda dan buku ini sehingga dapat mendekati pembaca di daerah pelosok Indonesia.Singkat cerita dengan memanfaatkan sosial media dan jejaring yang dimilikinya, ia pun menemukan relawan-relawan yang menjadi pionir di daerahnya masing-masing.^^DONKEY LIBRARY, NIRWAN AHMAD ARSUKA$$https://www.radarbangsa.com/opini/13545/nirwan-ahmad-arsuka-si-koboi-penebar-buku-gratis",
	    "Puppetry is conceptual sculpture [...] technically a collage art [..]. The conceptual element, the sheer concentration on concept at the expense of communicative pleasantness, the sacrificing of the decorative or handsome appearance.... “Can puppet theater be more than puppet theater by giving purpose and aggressivity back to the arts and make the gods' voices yell as loud as they should yell?”^^BREAD AND PUPPET THEATRE$$https://breadandpuppet.org/wp-content/uploads/2013/01/Radicality-of-the-Puppet-Theater.pdf"
	    ]
	],[
	// 500
	    "NH: <span class='underline italic'>I identify more as a<br>collector than artist: someone, who<br>gathers, compiles,arranges, or<br>reorganises relationships between things<br>that often already exist in the world.</span>  [...]<br>I certainly don’t see myself as an artist or<br>‘researcher’ but a collector: a collector of<br>images, observations and small encounters.<br>This type of ‘notation’ enfolds to form an ongoing archive alongside notes, recordings, interviews and<br>artifacts. The process is<br>accumulative.^^SHEELA GOWDA$$https://ro.uow.edu.au/cgi/viewcontent.cgi?article=1795&context=theses1",
	    "“I dream that this village<br>and monastery will serve as a pilot<br>project, an information center for<br>environmental issues on the Tibetan<br>Plateau—which provides water for more<br>than 2 billion people in Asia. Print and<br>digital information, including audio and video,<br>are urgently needed and will require<br>distribution. Specific attention must also be<br>given to carbon -free energy as the area<br>develops. Indeed, the local government<br>has already begun to introduce<br>solar energy.”^^ARAHMAIANI FEISAL$$http://www.trfineart.com/wp-content/uploads/2016/08/AAP79_SecondLifeInTibet_Arahmaiani.pdf",
	    "[on Beroana (shell money)]:<br>“...exhibited at the Sharjah Biennale<br>in the United Arab Emirates in 2017<br>among other places—is that it <span class='italic underline'>turns the<br>museum artefact inside out. The object<br>ceases to be a customary treasure, hidden<br>away within a drawer, but instead<br>becomes the thing that occupies and defines<br>a space and an environment.</span> Beroana<br>is architectural: it marks a built environment and the protocols and social relations through which lives are lived.”^^TALOI HAVINI$$https://www.artlink.com.au/articles/4702/human-flow-in-melanesia-taloi-havinis-artefacts-an/",
	    "<span class='italic underline'>The indigenous scientist is the<br>ultimate radical figure</span> which has the<br>capacity of merging the contradictions;<br>of being at once scientific and a political actor, cohabiting the natural world while seeking to understand it. Most importantly, this figure stands for a <span class='italic underline'>different kind of epistemology, that reconnects us to other ways of knowing the human-nature symbiosis.</span> In other words, this figure embodies some of the most fundamental problems in our mind-nature<br>conception.”^^INDIGENOUS UNIVERSITY, URSULA BIEMANN$$https://www.youtube.com/watch?v=GDv47X9q5q0",
	    "“Watching Shahidul work,<br>often times from a distance and<br>sometimes when lucky, from close<br>proximity, <span class='italic underline'>I have come to learn that<br>institution building is not about the edifices we construct and the hardware we amass. Institution building is a slow process of nurturing people</span>, our capacity to be more effective professionals, but also and perhaps more importantly, <span class='italic underline'>nurturing our spirit and convictions.</span>”^^SYNTHESIS by Pathsala South Asian Media Institute$$https://www.thestatesman.com/world/bangladesh-man-shahidul-alam-1502680165.html",
	    "“So it's this incremental<br>experience that is re-injected into<br>the show and hopefully shared with the people from Sharjah, introducing an international audience of musicians & composers to not just to my practice, but also Sharjah and its audiences, through using my work as an entry point to access it. <span class='italic underline'>To establish bridges between the works of different composers and audiences, musicians, collaborators with the people<br>who take workshops with them.</span>”^^I/E by TAREK ATOUI$$https://thequietus.com/articles/29432-tarek-atoui-cycles-in-11-sharjah-biennial-interview",
	    "“[speaking on an exhibition<br>held at the Guggenheim] in these<br>approaches that mainstream art is into<br>the rural, we very often lack the voice of<br>the rural itself. [...] What we need to look at is<br>to <span class='underline italic'>forms of giving voice and making cultural processes that involve co-creation</span> and offer a new <span class='underline italic'>agency to the rural communities themselves, to not instrumentalize them for the sake of the very often self-referential discourses of the cultural field.</span>”^^FERNANDO GARCÍA-DORY$$https://cultureactioneurope.org/knowledge/beyond-the-urban-fernando-garcia-dory/",
	    "“The growth and relocalisation<br>involves also forms of food<br>autonomy - and this is very important.<br>The restoration of these life support<br>systems, which we need to look at, involves also cultivation [...] a concept that is connected with care, and connected also with [..] a new humanist paradigm that we could say is also post-human as it no longer puts human beings at the center of creation [...] but to consider ourselves as part of a cycle together with other living forms.”^^FERNANDO GARCÍA-DORY$$https://cultureactioneurope.org/knowledge/beyond-the-urban-fernando-garcia-dory/",
	    "“How can we take political<br>action where “unintended<br>consequences” open up a messy reality<br>in which it is difficult to connect a crime<br>to its location? Was it even a crime? In contemporary times these are political questions for forensic architecture, as human lives and the planet’s ecosystem are at stake. The problems posed by the toxic Victorian house are now the most urgent questions that have shaped and continue to shape<br>our relation to the planet.”^^BLUE PERIL, INTERPRT$$http://www.interprt.org/wp-content/uploads/2019/08/Toxic-House.pdf"
	], [
	// 700
	    "CN: We tend to form some kind of a community with those we share a rhythm. Such rhythm can be a construct, but once it is constructed, rhythm becomes a regulator, a substance that binds. At the same time, rhythm can be the substance that dissolves a community. Rhythm is very difficult to define. It is found everywhere, even where there isn’t in appearance. Some theorists suggest that there is rhythm wherever there is an expenditure of energy. In this way, rhythm can give us insight in how to be friendly and hospitable to those whom we don’t share a rhythm.^^CHRISTIAN NYAMPETA$$https://medium.com/@camdenartscentre/in-conversation-christian-nyampeta-gina-buenfeld-d32fed700b",
	    "“So, might we understand Gowda as an artisan, both in the sense of someone who does skilled work, and also as Carl Andre describes it, in the Marxist sense, as 'a worker who employs himself essentially as his own tool'? Certainly, for all of her physical engagement, she does not theatricalise her toil or aestheticise her sweat, preferring to keep this intensity palpable but indiscernible. [...] Rather than fetishising process by declaring it to be more important than the finished work, <span class='invert_black'>Gowda uses the quality of labour intensiveness to explore different forms of cultural knowledge that inhere in the making of objects.</span>”^^SHEELA GOWDA$$https://www.afterall.org/publications/journal/issue.22/the.specific.labour.of.sheela.gowda#cite3603",
	    "Gunnar: What are the main themes or questions that you are dealing with in your work? Arahmaiani: I think that the main theme of my works is power relations. But not limited to a narrow mind frame along binary oppositions. Only a free imagination makes it possible to explore fields that couldn’t be reached within the boundaries of a binary thinking. I ask very simple questions, for example: ‘What does our life on this planet actually mean?’ <span class='invert_black'>In my quest for answers, I am particularly interested in norms and values that we inherited from our ancestors.</span> In my work, I try to reinterpret these philosophies in the context of contemporary conditions.^^ARAHMAIANI FEISAL$$",
	    "“The “Flag Project” is designed to study and develop collective creativity. I implement an <span class='invert_black'>“open art system,”</span> in which art is defined as broadly as possible, to break through rigid discourses and established values, <span class='invert_black'>engaging in democratic dialogue, but also taking a critical approach when needed.</span> During this process, outcomes—artworks or other forms—are produced collectively, collaboratively or individually. Another aim is to create and maintain a network that enables the exchange of ideas and experiences, or development in the form of collaborations.”^^ARAHMAIANI FEISAL$$http://www.trfineart.com/wp-content/uploads/2016/08/AAP79_SecondLifeInTibet_Arahmaiani.pdf",
	    " “...these projects go beyond the performance of public experiences; <span class='invert_black'>they are primarily relationships that are built over extended periods of time, and reciprocity is at their core</span>. This requires that I make a commitment to acompañamiento: to listen and learn and approach the participants and collaborators with open and continuous communication, self-evaluation and collective evaluations, because it is normal for things to change and we often need to recalibrate and refocus. In the process of exchange, in sharing and learning from each other, we agree on what we will give and what we would like to receive, and in this way, all participants become stakeholders in the project.”^^LAURA ANDERSON BARBATA$$https://post.moma.org/making-waves-a-conversation-with-laura-anderson-barbata/",
	    "“I believed that Julia needed to recover her dignity and to occupy her own place in history as well as in our memory,” Barbata stated. “I felt that if I did not lobby for her removal from the Schreiner Collection she would remain indefinitely stored in a university collection with an inventory number and an inconclusive existence. <span class='invert_black'>To defend the rights of all people is our responsibility.</span> These restorative actions help to correct past injustices because we’re also paving the way for a future where this does not happen again — for all people, all of humanity, and that’s why we do these things.”^^LAURA ANDERSON BARBATA$$https://hyperallergic.com/421575/artist-repatriation-of-julia-pastrana/",
	    "‘In all mediums, her practice <span class='invert_black'>perpetuates the desires for Indigenous Knowledge Systems to undermine the persistent colonial structures that aimed to annihilate them.</span> She delves deeply into themes of representation, inheritance, habitats, and epistemologies of Oceania.’<span class='invert_black'>‘The ways in which societies approach the ‘ocean’ is an expression of the value given to life itself.</span> Through utilizing sound and other sensory mediums, Havini asks the audience to reconsider evolution. In deep-time listening, a continuum is created. The sound and the experience embodies Ocean Space through sequences created by the artist, but it remains within the visitors, evolving and as a physically embodied memory.’^^TALOI HAVINI$$http://press.tba21.org/news-tba21academy-presents-the-soul-expanding-ocean-1-taloi-havini-and-extends-territorial-agency-oceans-in-transformation-at-ocean-space-venice?id=121880&menueid=9361&l=english",
	    "CaroBD: Do you have a big purpose as a puppeteer and a teacher in puppeteering, do you have something you want to achieve [...] with the medium?JB: Just letting people know that it's an option, it's a medium that can be used in many different ways. [...] When I'm teaching I'm just hoping to share with students the idea that <span class='invert_black'>anybody can do it</span> - anybody can make a puppet show. [...] You can enter into the form on many different levels, it can be satisfying if you're just an amateur or if you're just playing with a stuffed animal with your child and you make it talk. Or if you do a legitimate theatre show [...] or out on the street, it's all possible.^^JOHN BELL$$https://www.listennotes.com/podcasts/puppet-podcast/episode-20-john-bell-puppet-qWy6SjeoMK0/",
	    "“The creation of such an archive, we believed, would thrust historical awareness in Nepal from the stodgy register of Great Men to a <span class='invert_black'>vision of the past where Nepali people can see themselves reflected.</span>” “The idea of <span class='invert_black'>claiming place in public life</span> was one of the most significant themes that emerged from the materials we collected. The distinctions between the private and the public have a complex history in Nepal, as elsewhere, but these concepts are also repeatedly mobilised by women in the narratives about their own lives—describing their moves from one sphere to the other as a major transition or a breaking of barriers that held them back.”^^NEPAL FEMINIST MEMORY by the NEPAL PICTURE LIBRARY$$https://kathmandupost.com/miscellaneous/2018/10/13/the-public-life-of-women",
	    "Tanzim Wahab (dir. of 2021 edition): “In south Asia, <span class='invert_black'>many people still believe in images as evidence,</span>” he says. “Our revolutionary movements, such as the war of independence in 1971, evolved through the narratives told by images. They give us a vision. As Shahidul Alam always says, fear is contagious but courage is contagious too. <span class='invert_black'>Photographs can help bring back our courage and show us ways to envisage a better future.</span>”[Shahidul Alam's] intention was to create and sustain a locus for images and image-makers that would challenge the narrative of Bangladesh — poverty-stricken, flood-riven, aid-dependent — as recounted by the western media.^^SYNTHESIS by Pathsala South Asian Media Institute$$https://www.ft.com/content/f2714ba0-8f30-4ed9-8e69-c331851f4698",
	    "[also on the mangrove] It's not really about this machine and this thing, here, it's about all the conversations we've had. We've been dreaming about other stuff, and we talk about other things we could do together. (1:29-1:42)“Significant to Atienza’s aesthetic practice is her active social obligation to her community. Rather than passively documenting the people and ecology of Bantayan Island, her social practice helps to augment the full complexities of human subjectivity, society and the environment. As she says, ‘My work is always inspired by the question: can art trigger empowerment and tackle real issues in society?’^^FISHERFOLKS DAY by MARTHA ATIENZA$$https://artreview.com/artist-martha-atienza-environmental-justice-philippines/",
	    "“[to be able to rescale and relocalise] involves rethinking the ways we live in the city. [...] The term we use is re-peasantification, to adopt aspects of the peasant form of life into our daily habits. The peasant form of life involves <span class='invert_black'>mutual support, forms of reuse and recycling [...] rethinking rhythms, attention, forms of satisfaction</span> - the notion of a 'good life', that was associated with having basic things and enjoying with others and with a more nurturing surrounding has to be central to the transformation of our society into more sustainable modes.”^^FERNANDO GARCÍA-DORY$$https://cultureactioneurope.org/knowledge/beyond-the-urban-fernando-garcia-dory/",
	    "EB: Right. So what change do you see your activism and practice bringing? FGD: Well it depends on the kind of practice. In the art context, my practice is more about just diverting attention to certain questions and topics I find interesting, like food systems or rural environment. But with my projects, like what I’m doing with this village, <span class='invert_black'>it’s more about creating a space for other forms of life—a collective life with a land-based economy, a community of practice that’s beyond the discursive aspect of activism.^^CHRISTIAN NYAMPETA$$https://soundcloud.com/e_flux/sohrab-mohebbi-and-christian</span>",
	    "“Arsenic was the key ingredient in bringing a luscious, Technicolor hue to various pigments of green in Victorian Britain. Developed by the prodigious Swedish chemist Karl Scheele, copper arsenite or “Scheele’s green” and chemically similar dyes were widely used in wallpapers throughout Britain. These were cheap and widely available due to both mass-production techniques and large-scale arsenic mining. The color of prosperity in Britain was a macabre green—the color of money—laced with arsenic.”^^BLUE PERIL, INTERPRT$$http://www.interprt.org/wp-content/uploads/2019/08/Toxic-House.pdf"
	],[
	// 900
	    "Christian Nyampeta’s project consists of a scriptorium (a place for writing), an exhibition, and public programs concerned with “thinking Africa,” then and now. The program is resourced around the idea of an “evening school,” following the Senegalese writer and film director Sembène Ousmane, who saw cinema as “cours du soir” or “evening classes.” This concept was informed by the traditions of orality, sensuality, and conviviality within the realm of art learning and making in his region. Sembène saw cinema as a popular information system in the service of education, aesthetic experience, and public dissemination. His methodology concerned the use of cinema’s collective production, and investing in its viewing methods that draw from different uses of time, visual and textual histories, social struggles and hopes, in mutuality between his own locality and the world at large.^^CHRISTIAN NYAMPETA$$https://soundcloud.com/e_flux/sohrab-mohebbi-and-christian",
	    "Arahmaiani: [...] I understood that, for a long time, the principle ideas of my art works and writings have been grounded in Buddhism. I simply wasn’t aware of it. It also deepened my knowledge of pre-Indonesian history. It’s very important to revive this knowledge because many Indonesians don’t understand their own history anymore. They have lost that knowledge. The most important influence on me from all of this is that I understand so much more and am so much more conscious of what I actually want to express in my works. A deeper understanding of ethical principles, for example, the principle of non-violence, allows me to comprehend humanitarian problems with regard to social politics, culture, and the environment in a more holistic way.^^ARAHMAIANI FEISAL$$",
	    "“Arahmaiani initiated Flag Project in 2006 following an earthquake in Yogyakarta, with its main objective to encourage dialog and communication for collective creativity and problem-solving. It later extended into the global project it has become today – performed as a community project in Australia, Belgium, China, Germany, Indonesia, Japan, Malaysia, the Philippines, Singapore, Tibet and Thailand. When starting the project at Yogyakarta’s Amumarta Islamic boarding school, they came up with two keywords written in Arab Pegon, Jawi or Malay Arabic: akal (mind) and nyali (courage). From the Tibetan monastic Gelugpa sect in 2010 came the words om (a condensed version of all Buddha’s teachings) and thasi delek (blessings and good luck). In 2012, a community in Passau, Germany, added the words mut (courage) and herz (heart) to the Flag Project.”^^ARAHMAIANI FEISAL$$https://www.thejakartapost.com/life/2019/05/21/flag-project-arahmaianis-eloquent-art-statement.html",
	    "AR: The work you made before those residencies [in Sendai and Brisbane] had black backgrounds and the focus was on people floating within that space, but now you are increasingly exploring the locations themselves, which often show no trace of human presence. Some of these settings are very unusual and mysterious. How do you find these places and what is it that compels you to photograph them?LS: The particularities of the places are not all that important. Rather, I will go through a variety of processes that end up leading me to a location, and it’s the experiences I have along the way that matter. I think those experiences have a profound connection with the history and societies of those places.^^LIEKO SHIGA$$https://www.tokyoartbeat.com/tablog/entries.en/2008/10/ghosts-in-the-lens.html",
	    "“The platform, Devenir Universidad, is a way of letting everyone in on the conversation. Include everyone, letting everyone know about the current state of affairs. In other words, it creates transparency of the process. It makes the process comprehensible within the community.” (32:14- 32:43)3. Are you interested in the “afterlife” of your project, when the artist goes home?UB: There is no such boundary between life and art in my practice. All my projects are alive and actively doing something in the world. [...] if you are asking if my projects also act outside their designated place in the art world, I would say yes, because they are clearly not hermeneutic projects; they often draw on live testimonies of people whose livelihoods, whose very existence, is at stake. So there is an inherent urge to publicize beyond the art context to reach communities who will use them for advocacy.^^INDIGENOUS UNIVERSITY, URSULA BIEMANN$$https://www.on-curating.org/issue-25-reader/questions-on-community-with-ursula-biama.html#.YEwvTWQza3U",
	    "COOKING SECTIONS Of course. It’s an invitation to appropriate the project and transform it. For us it was very important to think of the book not as the catalogue of the project but as another aspect of The Empire Remains Shop that pushes the project forward. We were really interested in how we could use it as a tool to think about emancipating or decolonizing contemporary food practices. The whole project tried to think of counterapproaches to buying and selling. If the neoliberal world has appropriated the language of sustainability, can we do it the other way around and appropriate neoliberal tools to challenge the logic of the franchise and think of it in terms of value beyond profit margins? We’re interested in the original French meaning of “franchise” as releasing oneself from servitude.^^ISTANBUL BUFFALOES PROJECT by COOKING SECTIONS$$https://www.artnews.com/art-in-america/interviews/food-studies-a-conversation-with-cooking-sections-56484/",
	    "TA: [...] Working with deaf people totally changed my practice. [...] Maybe the most important thing is learning what listening is about, and breaking lots of cliches I had, and a lot of people around me had on what the act of listening is. For me now, the act of listening is multiple collaborations which became an act that involved all the senses - and that mirrors a bit what I was telling you about my interest in Marfa, coming here and feeling the wind, seeing the landscape and hearing the sounds. For me, the act of listening became this: mobilising all the senses towards understanding what is the sound we're trying to catch? And not closing the eyes and focusing on the sound while trying to channel it through the ears. For me now, this total act is tactile, is physical, is visual, is multi-sensorial in many ways.”^^I/E by TAREK ATOUI$$https://marfapublicradio.org/blog/west-texas-talk/artist-and-composer-tarek-atoui/",
	    "“I/E is a collective instrument that responds to outdoor situations. On this project, I wanted to propose new ways of working with concrete sound and field recording. For me, working in, out and from exterior environments has become important. The environment is not just sound material or a sound source – its acoustics and social dynamics, for example, can inform composition and inspire news ways to perform and collaborate.”“My work as a composer is to let [dissonance, resonance, and harmony] be by giving them the parameters to co-exist. For me, my role as a composer starts with setting up the constraints of the encounters and the collaborations that my pieces generate. These constraints are the space, the relation to the audience, the relation between the performers – this was the case with I/E.”DN: What have you learned about listening and hearing in working with people who are deaf?^^I/E by TAREK ATOUI$$https://marfapublicradio.org/blog/west-texas-talk/artist-and-composer-tarek-atoui/",
	    "[on hospitality] “And in playing the hospitable role, you have to stay close to the artists, to the people who are involved, the ones who you invite. It’s then about sustaining the conversation and trying to imagine together other scenarios. So this in a very pragmatic, concrete way, is taking more and more time on a daily basis.”+ “I think for me, shifting things onto virtual platforms, in some cases it could be like a lazy answer to what our mission and task is as people who defend culture and who defend accessibility to arts and culture. Open source is half of the gesture, the other half is still about hospitality and bringing people to these platforms and spaces we create. So that's where things are at play.”[On I/E specifically]^^I/E by TAREK ATOUI$$https://www.ibraaz.org/interviews/130",
	    "EE: “...I have often wondered how the intensity of politicization, collectivity, debates, and counterpublics in various projects can be harnessed to create something sustainable in the long term that would in turn effect more concrete changes. But these changes are taking place; for what we do does something to us.”“When I started working in this direction, there was no platform for such an argument. The first Crip Magazine came out in 2011, seven years ago. It was the idea to do something like that because it just doesn't exist. From the need to create a context for such emancipatory artistic approaches in this direction. I just wanted to get to know people who were also working in this direction and who were there to offer a platform for these things.”^^CRIP MAGAZINE, EVA EGERMANN$$https://www.p-art-icipate.net/projektnews/interview-mit-eva-egermann/",
	    "'...in the sense of claiming a degrading discourse: claiming the “crank” (the ill, the feigning ill, the one who begs and the collapse of the distinction between the three). Opacity and the right to not be understood.' (14-15/24) EE: “On the other hand, there are also opportunities and productive situations at the universities, situations in which people can experience studying as a form that enables individual action [...] The participating groups [...] describe this collective learning process as occurring in the midst of an eruption, as something that was able to shatter established structures of power. Squatting turned the rigid, cool, neoclassical auditorium into a site of negotiations. Solidarity and collective euphoria created the energy required for an unforeseeable amount of work that needed to be done.”^^CRIP MAGAZINE, EVA EGERMANN$$https://www.e-flux.com/journal/17/67397/what-shall-we-do/"
	], [
	// 1000
	    "JB: In our earlier talks you’ve mentioned ‘collection’ a lot, but here I wanted to open specifically with questions around the use of photography in your practice, particularly in relation to your collections and recent work. What relationships do your photographs have with your collections – specifically the notebooks and objects–and how are they used? NH: [...] Realising [the] importance [of his collection of photographs, notebooks] is something that really only occurred to me in retrospect after having time and distance away from them. It’s a process of recursive compilation and reassessment as much as adding to the ongoing collection. I view my photographs as parallel to my notebook-keeping or collection of objects. In fact, <span class='serif'>I associate taking pictures as a type of collection, essentially tied to forms of ‘informal’ archive making where the images, texts and objects are accrued over many years and perhaps only returned to and developed years later.</span>^^NEWELL HARRY$$https://ro.uow.edu.au/cgi/viewcontent.cgi?article=1795&context=theses1",
	    "“...For example, Intervention: Indigo is informed by my homeland of Mexico, which has a rich legacy of ritual public processions and celebrations—as well as protest—the importance of the occupation of public space through processional performance from my work in Trinidad and Tobago, and my research on textile traditions and material culture from around the globe. As artists, we<span class='serif'> can unite to name the forces that are oppressing our societies and identify a common purpose by using all the forms of creativity we have available</span>—dance, music, stilt dancing, spoken word, the creation of ritual space through interventions, and the creation of wearable art from textiles. These <span class='serif'>expressions have the capacity to cross boundaries, and they invite us to honor traditions.</span> Through the process, we <span class='serif'>recognize ourselves in the work</span> and build art-based social-practice projects that result in <span class='serif'>long-term exercises of reciprocity and collaboration.</span>”^^LAURA ANDERSON BARBATA$$https://post.moma.org/making-waves-a-conversation-with-laura-anderson-barbata/",
	    "DOMINIC: Would it be fair to say that [...] maybe the time has passed in which the crucial importance is to document petroculture and its impacts, and maybe what's crucial in this moment is to create alternatives?UB: Yes, I think it has to do with that shift to a more planetary vision, and a shift from a critical attitude to one that can include care and connectivity, and solidarity [...] a different spirit, really, than the critical one. Which is still important and necessary, but it doesn't immediately lead to a better future. I prefer to work on creating an alternative. (01:00:54- 01:01:44)UB: You know, I was thinking, 'Who am I to create a university?' but on the other hand, art is an extradisciplinary field and I think it's quite well-equipped to bring these different ways [...] of thinking and doing together, which are not bound so much by the disciplinary format.^^INDIGENOUS UNIVERSITY, URSULA BIEMANN$$https://www.owltail.com/people/7ly5x-ursula-biemann/appearances",
	    "[on the cheese workshops] For me, a mobile cheesemaking unit is playing on those contradictions: making cheese entails changing the state of matter from liquid to solid; it is microbiological livestock management and an ancient pastoralist biotechnology. <span class='serif'>The wish to learn it fast, in one morning workshop, deals with our wish for instant gratification.</span> The “authentic” foods we yearn for could also be accessible, self-made, and not elite gastronomic merchandise. It’s a way to reconnect with food makers and the problems they face. <span class='serif'>Food is therefore more than a political tool, it has become politics in itself.”“The artist has to cook, prepare the table, and do the dishes for a determined social subject to partake in the meal</span>—a humble position that doesn’t conform to the idea of the unique, genius artist. By pushing the managerial dimension to the limit, I seek to define the limitation of that form of art. I confront myself with that exhausting task as the opposite of creative process.”^^FERNANDO GARCÍA-DORY$$https://www.fernandogarciadory.info/index.php?/texts/interview-artpapers-janfeb-2011/2/"
	], [
	// 2000
	    "<span class='question-1'>SD & HK - What you call the radiophonic format seems to be in line with the ideas of collectivity, conversation and transmission that are very much embedded in your practice as a whole. Could you elaborate on your choice to work with this medium?</span>CN: [...] this radiophonic format is a time zone that fuses generations of changes endured across trans-familial lines spread over immeasurable geographic expanses into a new common world, while, at the same time, avoiding forceful amalgamation. [...] I myself remember lots of radio moments! One of them indeed occurred during the height of the misery in Rwanda, when I chose to listen to BBC World Service on short waves. It offered this super distant and otherworldly voice that somehow made life bearable by keeping me from being pulled into the depths of despair, lassitude and euphoria. <span class='serif'>Radio has this way of connecting isolations; it allows cultural works to travel and circulate.</span>^^CHRISTIAN NYAMPETA$$https://www.wiels.org/en/blog/an-interview-with-christian-nyampeta",
	    "“These other ways of thinking about the community, or the society tended to bypass - or to go behind, in time - the dominant discourse. In a way, to me, it offered a certain kind of mobility - and mobility is of course, not freedom as such - <span class='serif'>but the mobility to move across time, and to look at other ways of thinking; the communal,</span> or the common. [...] It has that dimension of - I don't want to use a difficult word, but - <span class='serif'>paleonymic [Derrida]; something old, like an old name, which then enables [us] to move ahead.”</span> (which then informed his work on How to Live Together)^^CHRISTIAN NYAMPETA$$https://soundcloud.com/e_flux/sohrab-mohebbi-and-christian",
	    "CN: If rest is being, I imagine that thinking is the awareness of this being, of inhabiting oneself with or without a goal in mind. This thinking can be expressed in a speech, but thought is not speech itself. Thank you for the quote by Kierkegaard! [”People demand freedom of speech as a compensation for the freedom of thought which they seldom use.”] In the logic you sketch, perhaps <span class='serif'>biennials are a form of language, of material appearances and arrangements that include and exclude the non-doing and openness of thought.</span> Here, we then find that there is a goal to such exhibitions and activities. If all is well, the existence and the contours of the demands of this goal are known in advance, and the extent of these prospects can be navigated, and its terms can be negotiated. At least in theory. At the same time, my presence here in Gwangju is partially owed to the long reveries, meditations, and open conversations we held with curator Binna Choi over a few years on the subject of how to live, work, and rest together. This intimacy becomes an intensity at specific moments such as the installation weeks. The intensity shifts into a distributed intimacy, as we encounter the works in various forms, as exhibitions, publications, events, and so on. The <span class='serif'>“letting” is also letting intensity and intimacy grow into something not yet known or no longer known.</span> This, again, reminds me of a synonym.^^CHRISTIAN NYAMPETA$$https://www.on-curating.org/issue-36-reader/how-to-rest-together.html#.YI9hFmYzbq0",
	    "<span class='question-1'>CN: [...] I work with many others, namely I collaborate with others for which I am extremely grateful. <span class='serif'>But I think I want to work differently. I am now much, much, much more interested in cooperatives instead of collaborations. The art economy seems to demand collaboration, while it minimises cooperation. [...] Collaboration, as I have come to experience it through my work, is not durable. I get to keep the name of the collectively authored work, and I get to own whatever is the outcome of my collaborative efforts. [...] But I think singular authorship is an indication of the minimal impact these actions have: I benefit from it the most, and there is little to show for in a ‘community.’ In truth, then I don’t benefit much either, if this benefit is not mutual, it’s asymmetrical.</span> For example, the students who I worked with in 2015 at their boarding school in Nyanza, in the current film at presented now at Camden Arts Centre, have not seen the film. Most of them will not have enough funds to travel to Europe, or do they have an internet connection strong enough to stream the film. From now on, I want to take into consideration the needed costs to present the collaborative to each of the contributors.JHE: [...] So I would like to ask you if you also could talk about the relationship between the things that you make, the hosting structure, and the institution where they present themselves. Could you give an example of these connections?</span> CN: It is a beautiful question. In my experience, every exhibition is contextual. In some cases, an exhibition is the culmination of a sets of elaborate activities, in some other cases it is a setting for further research, in some others it is a setting for hosting workshops, and in some others it is a thesis, etc. All together, leading to the exhibition are interior activities, and the exhibition is a space to meet the rest, to meet the outside: if we retain the notion of rest as a sensibility of attending to what is to come. Indeed, the distinction between action and passivity is not what is at stake in “my” exhibitions. I am now speaking from South Korea; I am here on the occasion of the Gwangju Biennale. The entry of my contribution in the exhibition catalogue speaks of these exhibition activities as also restful activities: watching movies, debating, reading, eating, drinking, workshopping, finding solutions, talking to strangers and friends, etc. All these activities can be ways of resting. Resting compels self-determination, it makes it possible to inhabit oneself with or without a goal in mind.^^CHRISTIAN NYAMPETA$$https://www.on-curating.org/issue-36-reader/how-to-rest-together.html#.YI9hFmYzbq0",
	    "<span class='question-1'>BANNISTER: Do you enjoy these protracted interpersonal exchanges? Or would you prefer to work quickly, with relative anonymity? (When I ask this, I am not thinking of works like Darkroom where the relationship with roadworkers was crucial to the preparation of materials, their labour a fundamental element of the final work.)</span>GOWDA: The wholesale market world as a daily routine is so different from mine. <span class='serif'>I enjoy watching how they work,</span> their own sense of order or seeming disorder—usually there are very good reasons for the way they do things—I enjoy the sensuality of a shop overflowing with varied things, each item seen in multiplicity creating amazing configurations. It is so enriching for the eyes, nose, ears, touch.</span> I find shopping in Europe or the US quite uninspiring compared to this. You need to know what you want and then you find it in its rightful place. <span class='serif'>There are no surprises. Having said this, ‘finding’ is not incidental; it is not the beginning.</span> Finding is about recognising something. You recognise it because you are looking for something that is relevant to the constant dialogue you are having within yourself about concepts and things around you. These encounters are catalyst moments, when the world out there presents you something that finds a resonance within you. Sometimes the encounter happens first and you go back to it later when a conceptual framework has been formulated.^^SHEELA GOWDA$$",
	    "<span class='question-1'>BANNISTER: I’d like to talk about materials. You’ve noted that you always source art materials yourself, that it’s difficult to delegate as handling materials enables you to understand both their potential and their limitations. I wonder, are there [other] unseen parts of your practice that are <span class='serif'>collaborative in some way, that rely on other people?</span> GOWDA: Of course there are other people helping me—sometimes officially acknowledged if their input is specific or very substantial. [...] To my understanding, collaboration does not mean mere assistance, paid or unpaid. [...] Collaboration is when the other person brings in a thinking that influences the direction and nature of your work, and here too opinions and feedback cannot be called collaboration. Most often, I use materials or ready products in the market where the skill of the person who has made it by hand is evident—<span class='serif'>the acknowledgement comes in my recognition of this process and the very reason that I pick it up and use it.</span> The small wooden figurines that I used in Of All People [and] the hair ropes used in Behold are some examples of unseen hands.^^SHEELA GOWDA$$http://laurabannister.com/selected-writings/an-email-thread-with-sheela-gowda/",
	    "<span class='question-1'>NM: In your work and life, you have always taken the opposite approach, committing to a deep investigation of your own complex cultural background and finding commonalities between different traditions. In art, this is what expands lateral thinking; at the same time, in the past this approach caused you troubles, shocking audiences with a more monolithic worldview and beliefs.</span>A: You know in the 90s I made this work called Lingga-Yoni that created problems with the radical groups of Muslims in Indonesia. They misunderstood it – or perhaps they didn’t want to understand. It was based on the ancient Hindu Buddhist philosophy which in a way I inherited from my ancestors. My struggle to connect ancient traditions with science and technology inevitably gets through my artwork. <span class='serif'>Lately I have gotten closer to Buddhism, but this isn’t about changing religion for me. I see the essence of all religions being basically the same; it is for the good of people of this earth.</span> But of course there are different cultural contexts and different ways of doing it. I don’t make a big deal about it, I’m more interested in the idea of pluralism, respecting the differences.^^ARAHMAIANI FEISAL$$https://www.cobosocial.com/dossiers/arahmaiani-superheroine-of-indonesian-contemporary-art/",
	    "<span class='question-1'>NM: It’s interesting to see the evolution of your artistic practice, from denouncing social and political issues, to step in and becoming part of the solution.</span>A: That’s right. Because in the past I have been questioning, questioning and protesting and criticizing. <span class='serif'>But ultimately, who is it going to answer? Not the authority. In fact, that almost never happened. I realized the most realistic thing was to answer to the problem myself. You have to try to give an answer, rather than limiting yourself to questioning and criticizing.</span> In a way, through the answer you also express a critique, but in a subtler way, through action. As an activist, you can of course be manipulated, so the trap is always there. But by going more directly into a solution, you get something more real which can’t be manipulated so easily by other people’s agendas. The important thing is that it never becomes us against them. When it becomes all about defeating your enemy, you lose sight of the change you want to see in the world. That’s what I’ve learned from my experience anyway.^^ARAHMAIANI FEISAL$$https://www.cobosocial.com/dossiers/arahmaiani-superheroine-of-indonesian-contemporary-art/",
	    " “...I presented Intervention: Indigo, a project that combines procession, performance, dance, music, textile arts, costuming, ritual, improvised interactions with the audience, and protest. It began at the Bushwick police precinct. <span class='serif'>The work is a call to action to serve and protect—and a protest in response to the violence and murder at the hands of the police of Black people</span> living in this country and all over the world. <span class='serif'>The point of departure is the color indigo, a dye that is used around the globe and associated with protection, wisdom, and royalty</span>. For example, in Burkina Faso, newborn babies are wrapped in indigo-dyed cloth to protect them. And I do not think it is a coincidence that indigo is the color of police uniforms here in the US, and almost all around the globe. It is a color imbedded with great meaning. [...] Through the act of intervention, we exercise our right to occupy public space, and in doing so, express our defiance as we symbolically appropriate what is ours and demand protection. We do this while wearing the color that symbolizes care and service but also the repression of QTBIPOC communities.”^^LAURA ANDERSON BARBATA$$https://post.moma.org/making-waves-a-conversation-with-laura-anderson-barbata/",
	    "“To simultaneously announce her arrival, in January 2008, and ingratiate herself among villagers, Shiga passed out flyers that read: “Pleased to meet you. My name is Lieko Shiga. I have rented a space in the pines next to the Kitakama Pool … I am a photographer, and I usually travel around to various places and take photos. This will be my center of activities for the new year…. I will do my best to serve you.” She became the local community photographer. In this role, she documented everything from baseball games to town hall meetings, as well as festivals and ceremonies on the verge of dying with members of the aging population. She made portraits that villagers could give to family members or use for their own funeral services. As word spread, people began to visit her studio out of curiosity. <span class='serif'>Soon she began recording their oral histories, collecting information about them, the local environment, the economy, and the history of the village. A complex portrait of Kitakama consequently emerged, leading her to believe: “Japan is in Tohoku.”</span>^^LIEKO SHIGA$$https://aperture.org/editorial/lieko-shiga-amanda-maddox/",
	    "<span class='question-1'>AR: As you mentioned before, the set-ups and processes that lead up to the moment when you take the initial photo are like a performance or ‘action’. Once you press the shutter, do you feel that you have captured a heightened state of reality?</span>LS: I think ‘action’ in photography is something to do with that sense of freshness: the photo shoot for My Husband in particular felt new and fresh to me. [...] My photographs render everything into reality: they are a way of bringing something back to life. You can talk about photographs in terms of ‘shooting’—to ‘shoot’ with a camera like you would shoot with a gun. <span class='serif'>However, for me, taking photos is not like shooting something: it’s like being shot.</span> I am shot, and the entire timeline of my existence is resurrected in the photograph. So, I think photography is the revival of eternal time and eternal life; <span class='serif'>a photograph is not a representation of time that has been killed. In such conditions, that means that I myself am firmly embedded in the photograph.</span>^^LIEKO SHIGA$$https://www.tokyoartbeat.com/tablog/entries.en/2008/10/ghosts-in-the-lens.html",
	    "NR: On the day that thousands of people were massing in front of the shrine during EDSA II [the Second EDSA Revolution; the first, also known as the People Power Revolution and commemorated by the shrine, had led to the Marcoses’ departure in 1986], we were supposed to open a solo exhibition by Santiago Bose in Green Papaya. We heard over the radio that thousands and thousands of people were already at the EDSA shrine. And Santiago said, “Hey, why don’t we cancel the opening and bring all the food to EDSA?” During that time, Surrounded By Water, another independent art space run by a collective of younger artists, was running a space right across the shrine. When we got to EDSA, bringing all the food from the opening, artists from our network were already there. Again, that was an action <span class='serif'>where artists were seen as important participants in that particular rally because artists had started to mobilise the immediate crowd</span> within the perimeter and started to solicit food, gather this food and distribute it to people. <span class='serif'>These are non-art-related actions, but nonetheless artists were there to make their presence felt as part of society and of the community.</span>”“In defining Green Papaya, Espina explained it carries the sense of not being yellow or ripe, and not to show something finished, and it encourages the state of potentiality, the state of being pure potential. It also gives encouragement to communities who are willing to experiment on different arts.”‘The communities they have created, advocacies they have supported, and voices they gave a platform to cannot be touched by flames; online, many have expressed their grief at the loss of a safe space, the loss of irretrievable works. “We have been getting a lot of encouraging messages from around the world,” says Espina. “These keep us and the team going. Green Papaya has had a hand-to-mouth existence for the past 20 years; money was always a problem. But it was this sense of community that kept us going this long, and we need our community now more than ever to help us piece back our history,” says Espina.’^^GREEN PAPAYA$$https://artreview.com/norberto-peewee-roldan-how-artists-can-change-society/",
	    "“...But besides the shared physical resources, <span class='serif'>the most valuable commodity is the presence and time we have for each other.</span> Green Papaya is sustained by a small community who like the kind of art that no one else thinks of as art—yet! It aspires to provide a space for critique and experimentation. Green Papaya has transitioned from being a space for exhibitions, to a discursive and performative space.”“Green Papaya is [...] is a halfway house for ideas, a space to hang out and have real conversations again, a chance to cook and share meals. <span class='serif'>It is less about art than it is about being artists and being human again—and questioning what that means in our current context.</span>”“Green Papaya is as much interdependent as it is independent. Green Papaya is not sustainable. <span class='serif'>Green Papaya is destined to close.</span> [...] By 2020, Papaya is no longer Green. It will be ripe and ready for the plucking. Working towards its death [through the archival process], <span class='serif'>Green Papaya is investing in possible futures.</span><span class='question'>”NR: “I think the role of artists and cultural workers has changed dramatically over the years. [...] Artists are no longer there to reflect history or what is happening in the country, but to be active participants in political actions.</span>”MR: “I wanted to ask you about Joseph Estrada [a former actor who served as president of the Philippines between 1998 and 2001] and his impeachment in 2001. You started Green Papaya in 2000. How was Green Papaya involved with this?^^GREEN PAPAYA$$https://artreview.com/norberto-peewee-roldan-how-artists-can-change-society/",
	    "<span class='question-1'>CaroBD: Do you think that puppet art is in an ascension, or less popular - what do you think about the popularity of the medium?</span>JB: When I think about the history of the puppet medium, it sort of goes up and down sometimes. I think it's always there in one way or another, but public attention to it changes. Sometimes people discover it - 'Oh my gosh, it's puppets!' - like in the 1920s, 1960s, and 1990s in the United States [...] And then after a while people forget about puppets, and then rediscover them, as if its something brand new and not one of the oldest forms of performance in the world. [...] And right now, you know, thinking of Cirque du Soleil - which typically uses puppets, there's puppets on a lot of Broadway shows, [...] there's always been a lot of puppetry in television, in film, [..] puppetry goes into special effects. [...] And also traditionally, when you look at it you understand, puppets and objects are important for first nations culture and historically, Asian cultures - in India, and China, Japan and Indonesia, and all sorts of African forms of puppets and performance. <span class='serif'>It's a language that you can use,</span> and just jumping into that language is a very rich form.^^JOHN BELL$$https://www.listennotes.com/podcasts/puppet-podcast/episode-20-john-bell-puppet-qWy6SjeoMK0/",
	    "1. Kedua, waktu tahun 2014 saya berkuda dari Pamulang, Tangerang Selatan ke Parompong, Bandung, lewat jalan kampung. Saya banyak dibantu anak-anak untuk menunjukkan jalan. Bahkan mereka carikan rumput untuk makan kuda  dan dibawa ke lapangan. Saya jalan dengan dua ekor kuda milik sendiri, Merpu dan Arjuna Ireng. Kuda itu jenis sandalwood pony atau kuda pacu asli Indonesia setinggi 140 cm.Saya banyak mengobrol dengan anak-anak di jalan. <span class='serif'>Tapi begitu saya tanya soal asal usul nama kampung, mereka tidak tahu</span> dan tidak bisa cerita. Orangtuanya juga pada tidak tahu. Saya prihatin, karena saya ingin menulis daerah-daerah yang saya lalui, tapi tidak ada yang bisa bantu karena tidak pada tahun.<span class='serif'>Kalau cerita kampung itu hilang, mereka tidak ada ikatan emosional dengan kampung itu. Sehingga akhirnya mereka bisa tidak peduli dengan kampung itu. Imbasnya bahaya, mulai dari kemiskinan sampai pengangguran karena proses urbanisasi.</span>Sehingga begitu saya pulang, saya janji akan membawa buku ke kampung-kampung itu.Saya tidak membuat perpusatakaan. Tapi awal Pustaka Bergerak ada di Purbalingga.^^DONKEY LIBRARY, NIRWAN AHMAD ARSUKA$$https://www.suara.com/wawancara/2017/07/03/070000/nirwan-arsuka-pustaka-bergerak-buru-pembaca-ke-pelosok-negeri?page=all"
	],  [
		//img
		[['_DSC9446_fullsize.jpg'],['Yuta Nakamura']],
		[['_DSC9501_fullsize.jpg','_DSC9513_fullsize.jpg'],['Yuta Nakamura']],
		[['_DSC9522_fullsize.jpg','_DSC9518_fullsize.jpg','_DSC9525_fullsize.jpg'],['Yuta Nakamura']],
		[['_DSC9540_fullsize.jpg'],['Yuta Nakamura']],
		[['_DSC9551_fullsize.jpg','_DSC9566_fullsize.jpg'],['Yuta Nakamura']],
		[['2015-05-22_17.01.43.jpg'],['Yuta Nakamura']],
		[['20150910_091357.jpg'],['NIRWAN AHMAD ARSUKA']],
		[['20160916_104254.jpg','20160916_104256.jpg','20160916_104259.jpg'],['NIRWAN AHMAD ARSUKA']],
		[['20160919_094957.jpg','20160919_094959.jpg','20160919_095000.jpg'],['NIRWAN AHMAD ARSUKA']],
		[['20160919_095034.jpg','20160930_092128.jpg','20160930_092132.jpg'],['NIRWAN AHMAD ARSUKA']],
		[['20161006_144344.jpg','20161006_144419.jpg','20161006_144453.jpg'],['NIRWAN AHMAD ARSUKA']],
		[['Abuela_Eudocia_1.2.1.jpg'],['URSULA BIEMANN']],
		[['bread.docx'],['BREAD AND PUPPET THEATRE']],
		[['bread2.jpg','bread3.jpg'],['BREAD AND PUPPET THEATRE']],
		[['bread4.jpg'],['BREAD AND PUPPET THEATRE']],
		[['bread5.jpg'],['BREAD AND PUPPET THEATRE']],
		[['bread6.jpg','bread7.jpg'],['BREAD AND PUPPET THEATRE']],
		[['bread8.jpg'],['BREAD AND PUPPET THEATRE']],
		[['bread9.jpg'],['BREAD AND PUPPET THEATRE']],
		[['cooking/cooking_01.jpg','cooking/cooking_02.jpg','cooking/cooking_04.jpg','cooking/cooking_05.jpg','cooking/cooking_06.jpg'], ['Cooking Sections, CLIMAVORE: On Tidal Zones, 2017-ongoing. Installation view, Isle of Skye, Scotland. Courtesy: the artists. Photo: Cooking Sections. ','Cooking Sections, CLIMAVORE: On Tidal Zones, 2017-ongoing. Installation view, Isle of Skye, Scotland. Courtesy: Atlas Arts. Photo: Ruth Clark. ','Cooking Sections, CLIMAVORE: On Tidal Zones, 2017-ongoing. Installation view, Isle of Skye, Scotland. Courtesy: the artists. Photo: Nicholas Middleton. ','Cooking Sections, CLIMAVORE: On Tidal Zones, 2017-ongoing. Installation view, Isle of Skye, Scotland. Courtesy: the artists. Photo: Colin Hattersley.','Cooking Sections, CLIMAVORE: On Tidal Zones, 2017-ongoing. Installation view, Isle of Skye, Scotland. Courtesy: the artists. Photo: Nicholas Middleton.']],
		[['cooking/cooking_07.jpg'], ['Cooking Sections, Devaluing Property Real Estate Agency, 2016. Installation view at The Empire Remains Shop, London. Courtesy: the artists. Photo: Cooking Sections. ']],
		[['cooking/cooking_08.jpg'], ['Cooking Sections, The Empire Remains Shop, 2016. Installation view, London. Courtesy: the artists. Photo: Tim Bowditch. ']],
		[['cooking/cooking_09.jpg','cooking/cooking_10.jpg','cooking/cooking_11.jpg','cooking/cooking_12.jpg'], ['Cooking Sections, What Is Above Is What Is Below, 2018. Installation view at Giardino dei Giusti, Manifesta12, Palermo. Courtesy: the artists. Photo: Cooking Sections. ','Cooking Sections, What Is Above Is What Is Below, 2018. Installation view at Giardino dei Giusti, Manifesta12, Palermo. Courtesy: the artists. Photo: Cooking Sections. ','Cooking Sections, What Is Above Is What Is Below, 2018. Installation view at Giardino dei Giusti, Manifesta12, Palermo. Courtesy: the artists. Photo: Cooking Sections. ','Cooking Sections, What Is Above Is What Is Below, 2018. Installation view at Giardino dei Giusti, Manifesta12, Palermo. Courtesy: the artists. Photo: Cooking Sections. ']],
		[['cooking/cooking_13.jpg','cooking/cooking_14.jpg','cooking/cooking_15.jpg','cooking/cooking_16.jpg','cooking/cooking_17.jpg','cooking/cooking_18.jpg','cooking/cooking_19.jpg'], ['Cooking Sections, What Is Above Is What Is Below, 2018. Installation view at Bastione S.M. dello Spasimo, Manifesta12, Palermo. Courtesy: the artists. Photo: Cooking Sections. ','Cooking Sections, What Is Above Is What Is Below, 2018. Installation view at Bastione S.M. dello Spasimo, Manifesta12, Palermo. Courtesy: the artists. Photo: Cooking Sections. ','Cooking Sections, What Is Above Is What Is Below, 2018. Installation view at Bastione S.M. dello Spasimo, Manifesta12, Palermo. Courtesy: the artists. Photo: Cooking Sections. ','Cooking Sections, What Is Above Is What Is Below, 2018. Installation view at Bastione S.M. dello Spasimo, Manifesta12, Palermo. Courtesy: the artists. Photo: Cooking Sections. ','Cooking Sections, What Is Above Is What Is Below, 2018. Installation view at Bastione S.M. dello Spasimo, Manifesta12, Palermo. Courtesy: the artists. Photo: Cooking Sections. ','Cooking Sections, What Is Above Is What Is Below, 2018. Installation view at Bastione S.M. dello Spasimo, Manifesta12, Palermo. Courtesy: the artists. Photo: Cooking Sections. ']],
		[['cooking/cooking_20.jpg','cooking/cooking_21.jpg','cooking/cooking_22.jpg','cooking/cooking_23.jpg'], ['Cooking Sections, Offsetted, 2019. Installation view at Arthur Ross Architecture Gallery, Columbia University New York. Courtesy: GSAPP. Photo: James Ewing. ','Cooking Sections, Offsetted, 2019. Installation view at Arthur Ross Architecture Gallery, Columbia University New York. Courtesy: GSAPP. Photo: James Ewing. ','Cooking Sections, Offsetted, 2019. Installation view at Arthur Ross Architecture Gallery, Columbia University New York. Courtesy: GSAPP. Photo: James Ewing. ','Cooking Sections, Offsetted, 2019. Installation view at Arthur Ross Architecture Gallery, Columbia University New York. Courtesy: GSAPP. Photo: James Ewing. ']],
		[['cooking/cooking_25.jpg'], ['Cooking Sections, Mussel Beach, 2019. CURRENT: LA Public Art Triennial. Installation view. Photo: Cooking Sections']],
		[['cooking/cooking_26.jpg'], ['Cooking Sections, Mussel Beach, 2019. CURRENT: LA Public Art Triennial. Installation detail. Photo: Cooking Sections']],
		[['cooking/cooking_27.jpg'], ['Salmon: A Red Herring. Image: Office Ben Ganz and Luke Libera Moore']],
		[['cooking/cooking_28.jpg','cooking/cooking_29.jpg'], ['Cooking Sections, 2018. Courtesy: the artists. Photo: Lourdes Cabrera. ','Cooking Sections, 2017. Courtesy: Surface. Photo: Paul Plews.']],
		[['cooking/cooking_34.jpg','cooking/cooking_35.jpg','cooking/cooking_36.jpg'], ['Cooking Sections, Salmon: A Red Herring, 2020. Tate Britain, Art Now. Installation view. Photo: Tate. Requires image permission from Tate press office','Cooking Sections, Salmon: A Red Herring, 2020. Tate Britain, Art Now. Installation view. Photo: Tate. Requires image permission from Tate press office','Cooking Sections, Salmon: A Red Herring, 2020. Tate Britain, Art Now. Installation view. Photo: Tate. Requires image permission from Tate press office']],
		[['cooking/cooking_37.jpg'], ['Cooking Sections, Exhausted, 2021. SALT Beyoğlu. Installation detail. Photo: Mustafa Hazneci / SALT.']],
		[['cooking/cooking_38.jpg'], ['Cooking Sections, The Lasting Pond, 2021. SALT Beyoğlu. Installation detail. Photo: Mustafa Hazneci / SALT.']],
		[['Drone2_1.14.2.jpg'],['URSULA BIEMANN']],
		[['EducationalStudies02_023_OMP3236.jpg','EducationalStudies02_047_OMP3493.jpg','EducationalStudies02_052_OMP3451.jpg'],['URSULA BIEMANN']],
		[['Hernando3_1.9.1.jpg'],['URSULA BIEMANN']],
		[['IB-GP2.png'],['URSULA BIEMANN']],
		[['Microphones_in_shallow_waters_-_copie.jpg'],['name']],
		[['Rubiela_cu2_1.53.3.jpg','Rubiela2_2.1.1.jpg'],['URSULA BIEMANN']],
		[['WR1F4C~1.jpg'],['Eva Egermann']],
		[['WR3AB4~1.jpg','WR9F4C~1.jpg','WR20DD~1.jpg','WR55E6~1.jpg','WR542D~1.jpg','WR860D~1.jpg','WRE480~1.jpg','WRF3E3~1.jpg'],['Eva Egermann']],
		[['martha/2_MART~1.jpg'],['MARTHA ATIENZA Our Islands 11°16’58.4” N 123°45’07.0” E, 2017 (still) Image courtesy of SILVERLENS']],
		[['martha/003marthaatienza.jpg'],['MARTHA ATIENZA Panangatan 11°09’53.3”N 123°42’40.5”E 2019-10-24 Thu 6:42 AM PST 1.29 meters High Tide 2019-10-12 Sat 10:26 AM PST 1.40 meters High Tide, 2019 (still) Image courtesy of SILVERLENS']],
		[['martha/edwin_mask.jpg'],['Gilubong Ang Akong Pusod SaDagat (My Navel is Buried in the Sea), 2011 (still) Image courtesy of SILVERLENS']],
		[['martha/Equation_of_State_2019_Installation_View_Courtesy_of_Silverlens_17.jpg'],['www.silverlensgalleries.com info@silverlensgalleries.com 2263 Don Chino Roces Ave Ext, Makati City 1231, Philippines T & F +63 2 8816 0044 | M +63917 587 4011 MARTHA ATIENZA Equation of State II Rhizophora stylosa, 2019 Installation image courtesy of SILVERLENS']],
		[['martha/GOMA_APT9_installationview_20181128_nharth_010.jpg','martha/MARTHA_ATIENZA_Anito_1_2012-2015_single-channel_HD_video_9_min_loop_audio.png','martha/Martha_Atienza_Anito1_Nassauischer_Kunstverein_Wiesbaden_2018_Photo_Janine_Drewes.jpg'],['MARTHA ATIENZA Our Islands 11°16’58.4” N 123°45’07.0” E, 2017 Installation image courtesy of QUEENSLAND ART GALLERY |GALLERY OF MODERN ART (QAGOMA)','MARTHA ATIENZA Anito 1, 2011-2015 (still) Image courtesy of SILVERLENS','MARTHA ATIENZA Anito 1, 2011-2015 Installation image courtesy of JANINE DREWES, NASSAUISCHER KUNSTVEREIN WIESBADEN']],
		[['martha/MARTHA~1.jpg'],['MARTHA ATIENZA Equation of State II Rhizophora stylosa, 2019 Installation image courtesy of SILVERLENS']],
		[['oda/8.JPG','oda/1.jpg','oda/2.JPG','oda/3.JPG','oda/4.JPG','oda/5.JPG','oda/6.JPG','oda/7.JPG'],['ANA project, (a project on art and motherhood, in progress), June 2013, Copenhagen, Denmark, A.N.A. AIR - Astrid Noack’s Atelier residency.','ANA project, (a project on art and motherhood, in progress), June 2013, Copenhagen, Denmark, A.N.A. AIR - Astrid Noack’s Atelier residency.','ANA project, (a project on art and motherhood, in progress), June 2013, Copenhagen, Denmark, A.N.A. AIR - Astrid Noack’s Atelier residency.','ANA project, (a project on art and motherhood, in progress), June 2013, Copenhagen, Denmark, A.N.A. AIR - Astrid Noack’s Atelier residency.','ANA project, (a project on art and motherhood, in progress), June 2013, Copenhagen, Denmark, A.N.A. AIR - Astrid Noack’s Atelier residency.','ANA project, (a project on art and motherhood, in progress), June 2013, Copenhagen, Denmark, A.N.A. AIR - Astrid Noack’s Atelier residency.','ANA project, (a project on art and motherhood, in progress), June 2013, Copenhagen, Denmark, A.N.A. AIR - Astrid Noack’s Atelier residency.','ANA project, (a project on art and motherhood, in progress), June 2013, Copenhagen, Denmark, A.N.A. AIR - Astrid Noack’s Atelier residency.']],
		[['papaya/IB-GP6.JPG'],["A performance by Elisa Ferrari and Gabi Dao during Kamias Triennial 3 at Green Papaya's space in Quezon City. Photo by Yuji De Torres."]],
		[['papaya/IB-GP1.png'],['Screenshot of published materials for “Right People, Wrong Timing” (online)']],
		[['papaya/IB-GP5.JPG'],['“Sa Digma ng Halimaw" a play on extrajudicial killings in the Philippines presented during Jejak Tabi Exchange 2020 -- an international platform on contemporary performance that Green Papaya Art Projects co-curated. Photo courtesy of Green Papaya Art Projects.']],
		[['PICTURES_AND_CREDIT/BA2019~1.JPG'],['Eva Egermann']],
		[['PICTURES_AND_CREDIT/Crip_Magazine_2_1.jpg'],['Eva Egermann, Coverdesign of Crip Magazine #2 by Anna Voswinckel']],
		[['PICTURES_AND_CREDIT/DA_A7_02273.jpg','PICTURES_AND_CREDIT/DA_IMG_0611.JPG'],['Eva Egermann, Hold off, but hold me (with texts by Ianina Ilitcheva) Installation view, Central Garden, 2020, courtesy the artist, photo: Kunsthalle Wien','Eva Egermann, Hold off, but hold me (with a text by Ianina Ilitcheva, 183 Tage, 2015), Central Garden, 2020, courtesy the artist, photo: Kunsthalle Wien']],
		[['PICTURES_AND_CREDIT/DSC00544.jpg','PICTURES_AND_CREDIT/DSC00569.JPG','PICTURES_AND_CREDIT/DSC00671.jpg','PICTURES_AND_CREDIT/DSC00676.jpg'],['Bild: Freizeittreff Freimann, Cyborg Disco Party. Freizeittreff Freimann, Eva Egermann und Der Fahrende Raum, im Rahmen der Cyborg Disco Werkstatt 2018','Bild: Freizeittreff Freimann, Cyborg Disco Party. Freizeittreff Freimann, Eva Egermann und Der Fahrende Raum, im Rahmen der Cyborg Disco Werkstatt 2018','Bild: Freizeittreff Freimann, Cyborg Disco Party. Freizeittreff Freimann, Eva Egermann und Der Fahrende Raum, im Rahmen der Cyborg Disco Werkstatt 2018','Bild: Freizeittreff Freimann, Cyborg Disco Party. Freizeittreff Freimann, Eva Egermann und Der Fahrende Raum, im Rahmen der Cyborg Disco Werkstatt 2018']],
		[['PICTURES_AND_CREDIT/EJdTwwdw.jpeg'],['Bild: Freizeittreff Freimann, Cyborg Disco Party. Freizeittreff Freimann, Eva Egermann und Der Fahrende Raum, im Rahmen der Cyborg Disco Werkstatt 2018']],
		[['PICTURES_AND_CREDIT/Eva_IMG_0002.JPG','PICTURES_AND_CREDIT/Eva_IMG_0008.JPG'],['Eva Egermann, Hold off, but hold me (with a text by Ianina Ilitcheva, ich sehe die einsamkeit vor mir und sie ist leicht, hochroth München 2018), 2020, photo: Kunsthalle Wien','Eva Egermann, Hold off, but hold me (with a text by Ianina Ilitcheva, 183 Tage, 2015), Kaleidoskop. Fragmente, July 15, 2020, courtesy the artist, photo: Eva Egermann']],
		[['PICTURES_AND_CREDIT/Eva_IMG_0017.JPG','PICTURES_AND_CREDIT/Eva_IMG_0047.JPG','PICTURES_AND_CREDIT/Eva_IMG_0063.JPG','PICTURES_AND_CREDIT/Eva_IMG_0103.JPG','PICTURES_AND_CREDIT/IMG_E2262.JPG'],['Eva Egermann, Hold off, but hold me (Hospitalfood,Waitingroom,Handle, 2011), Central Garden, 2020, courtesy the artist, photo: Eva Egermann','Eva Egermann, Hold off, but hold me (CURE ALL NEUROTYPICALS NOW!, Mad Pride Parade Berlin 2019), Central Garden, 2020, courtesy the artist, photo: Eva Egermann','Eva Egermann, Hold off, but hold me (with a text by Ianina Ilitcheva, @blutundkaffee (65), Frohmann, 2017; WAGEN ZUM AUSRUHEN, Mad Pride Parade Berlin 2019), Central Garden, 2020, courtesy the artist, photo: Eva Egermann','Eva Egermann, Hold off, but hold me (NO ACCESS NO PEACE, Mad Pride Parade Berlin 2019), Central Garden, 2020, courtesy the artist, photo: Eva Egermann','Bild: Eva Egermann, Der Fahrende Raum im Rahmen der Cyborg Disco Werkstatt 2018']],
		[['PICTURES_AND_CREDIT/P1080075.jpg'],['Bild: Eva Egermann, Der Fahrende Raum im Rahmen der Cyborg Disco Werkstatt 2018']],
		[['PICTURES_AND_CREDIT/WR00B2~1.JPG','PICTURES_AND_CREDIT/WR403B~1.JPG','PICTURES_AND_CREDIT/WRC961~1.JPG','PICTURES_AND_CREDIT/WRNEUS~2.JPG','PICTURES_AND_CREDIT/WRNEUS~4.JPG'],['Eva Egermann']],
		[['Pranabesh_Das/10_Eclipse.jpg','Pranabesh_Das/02_Eclipse.jpg','Pranabesh_Das/06_Eclipse.jpg','Pranabesh_Das/07_Eclipse.jpg'],['NIRWAN AHMAD ARSUKA']],
		[['Salma_Abedin_Prithi/26_Salma_Abedin_Prithi.jpg','Salma_Abedin_Prithi/38_Salma_Abedin_Prithi.jpg'],['NIRWAN AHMAD ARSUKA']],
		[['Samsul_Alam_Helal/Under_Water_Chakma_Royal_Palace_dummy_.jpg','Samsul_Alam_Helal/19_Disappearing_Roots.jpg','Samsul_Alam_Helal/13_Disappearing_Roots.jpg','Samsul_Alam_Helal/14_Disappearing_Roots.jpg'],['NIRWAN AHMAD ARSUKA']],
		[['Sarker_Protick/002_Sarker_Elegy_.JPG','Sarker_Protick/001_Sarker_Elegy_.JPG'],['NIRWAN AHMAD ARSUKA']],
		[['Shadman_Shahid/Shadman_Shahid_No_Quarter_12.jpg','Shadman_Shahid/Shadman_Shahid_No_Quarter_05.jpg','Shadman_Shahid/Shadman_Shahid_No_Quarter_10.jpg'],['NIRWAN AHMAD ARSUKA']],
		[['Shahidul_Alam/Kalpanas_Warriors_mat_and_candle_Somari_Chakma.jpg'],['NIRWAN AHMAD ARSUKA']],
		[['Shahidul_Alam/Kalpana_Dress_7143.jpg'],['NIRWAN AHMAD ARSUKA']],
		[['Shahidul_Alam/Kalpana_s_warriors_at_Rubin_2446_pix.jpg'],['NIRWAN AHMAD ARSUKA']],
		[['Shahidul_Alam/Kalpanas_Warriors_installation_shot.jpg'],['NIRWAN AHMAD ARSUKA']],
		[['Shahria_Sharmin/shahria_sharmin_03.jpg'],['NIRWAN AHMAD ARSUKA']],
		[['Shahria_Sharmin/shahria_sharmin_01.jpg'],['NIRWAN AHMAD ARSUKA']],
		[['Shahria_Sharmin/shahria_sharmin_02.jpg'],['NIRWAN AHMAD ARSUKA']],
		[['TAREK_TAOUI_LAST/ROOM2_58.TIF'],['Tarek Atoui, Ausstellungsaufbau / exhibition setup Waters’ Witness, Fridericianum, September 2020 Foto / Photo: Nicolas Wefers']],
		[['TAREK_TAOUI_LAST/ROOM2_06.TIF'],["Tarek Atoui: Waters' Witness, Ausstellungsansicht / Installation view, © der Künstler und / the artist and Fridericianum, Foto / Photo: Andrea Rossetti"]],
		[['Taslima_Akhter/00_Photo_10.jpg'],['NIRWAN AHMAD ARSUKA']],
		[['Taslima_Akhter/01_MG_0113_copy.jpg'],['NIRWAN AHMAD ARSUKA']]
		]
	]
        var new_text_content_org=[
        ['sep_2000', 'sep_300', 'sep_img-3'],
['sep_img-1', 'sep_700-1', 'sep_900'],
['sep_30-1', 'sep_300-2', 'sep_img-3'],
['sep_400-2', 'sep_30-1', 'sep_img-1'],
['sep_400-2', 'sep_img-1', 'sep_30-1'],
['sep_img-2', 'sep_700-1', 'sep_900'],
['sep_img-3', 'sep_700-2', 'sep_img-2'],
['sep_200-3', 'sep_400-1', 'sep_img-3'],
['sep_img-1', 'sep_500', 'sep_700-2'],
['sep_2000', 'sep_300-sm', 'sep_img-3'],
['sep_img-2', 'sep_900', 'sep_500'],
['sep_img-3', 'sep_700-2', 'sep_img-2'],
['sep_30-1', 'sep_300-sm', 'sep_img-3'],
['sep_img-1', 'sep_img-2', 'sep_2000'],
['sep_1000', 'sep_400-2', 'sep_img-3'],
['sep_img-2', 'sep_img-3', 'sep_2000'],
['sep_200-1', 'sep_400-1', 'sep_img-4'],
['sep_img-2', 'sep_500', 'sep_500'],
['sep_1000', 'sep_400-2', 'sep_img-3'],
['sep_30-2', 'sep_400-2', 'sep_img-3'],
['sep_img-2', 'sep_500', 'sep_500'],
['sep_200-1', 'sep_400-1', 'sep_img-3'],
['sep_2000', 'sep_300-sm', 'sep_img-3'],
['sep_img-1', 'sep_300', 'sep_700-2'],
['sep_200-1', 'sep_400-1', 'sep_img-3'],
['sep_img-1', 'sep_700-1', 'sep_900'],
['sep_2000', 'sep_img-2', 'sep_img-1'],
['sep_200-3', 'sep_400-1', 'sep_img-4'],
['sep_2000', 'sep_300', 'sep_img-3'],
['sep_1000', 'sep_400-2', 'sep_img-3'],
['sep_img-3', 'sep_700-2', 'sep_img-2'],
['sep_img-1', 'sep_700-1', 'sep_900'],
['sep_img-2', 'sep_500', 'sep_100'],
['sep_30-1', 'sep_400-2', 'sep_img-3'],
['sep_img-2', 'sep_900', 'sep_500'],
['sep_200-1', 'sep_400-1', 'sep_img-3'],
['sep_200-2', 'sep_400-1', 'sep_img-3'],
['sep_img-3', 'sep_2000', 'sep_300-sm'],
['sep_30-1', 'sep_400-2', 'sep_img-3'],
['sep_200-1', 'sep_400-1', 'sep_img-3'],
['sep_2000', 'sep_300', 'sep_img-3'],
['sep_30-2', 'sep_400-2', 'sep_img-3'],
['sep_300', 'sep_700-1', 'sep_100'],
['sep_200-2', 'sep_400-1', 'sep_img-3'],
['sep_2000', 'sep_img-3', 'sep_img-2'],
['sep_2000', 'sep_300-sm', 'sep_img-3'],
['sep_200-2', 'sep_400-1', 'sep_img-3'],
['sep_2000', 'sep_300', 'sep_img-3'],
['sep_30-2', 'sep_400-2', 'sep_img-3'],
['sep_img-2', 'sep_700-1', 'sep_900'],
['sep_200-2', 'sep_400-1', 'sep_img-4'],
['sep_img-2', 'sep_700-1', 'sep_900'],
['sep_img-1', 'sep_700-1', 'sep_900'],
['sep_2000', 'sep_2000', 'sep_img-3'],
['sep_1000', 'sep_400-2', 'sep_img-3'],
['sep_img-1', 'sep_500', 'sep_900'],
['sep_30-1', 'sep_300-sm', 'sep_img-3'],
['sep_img-1', 'sep_700-1', 'sep_900']
        ]

   //      $(document).ready(function(){
			// console.log(shuffle(new_text_content_org))
   //      })
        var new_text_content = Array(new_text_content_org.length)
        for (var i = new_text_content.length - 1; i >= 0; i--) {
        	new_text_content[i] = Array(new_text_content_org[i].length)
        }
        for (var i = new_text_content.length - 1; i >= 0; i--) {
            for (var j = 0; j < 3; j++) {
            	new_text_content[i][j] = Array(2)
            	// text,name,link
                if(new_text_content_org[i][j].split('-')[0] == 'sep_30'){
                	console.log(new_db[0][0])
                    new_text_content[i][j][0] = new_db[0][0].split('^^')[0]+'<span class="quote">'+new_db[0][0].split('^^')[1].split('$$')[0] + '</span>'
                    new_text_content[i][j][1] = new_db[0][0].split('$$')[1]

                    new_db[0].shift()
                }
                if(new_text_content_org[i][j].split('-')[0] == 'sep_100'){
                    new_text_content[i][j][0] = new_db[1][0].split('^^')[0]+'<span class="quote">'+new_db[1][0].split('^^')[1].split('$$')[0] + '</span>'
                    new_text_content[i][j][1] = new_db[1][0].split('$$')[1]
                    
                    new_db[1].shift()
                }
                if(new_text_content_org[i][j].split('-')[0] == 'sep_200'){
                    new_text_content[i][j][0] = new_db[2][0].split('^^')[0]+'<span class="quote">'+new_db[2][0].split('^^')[1].split('$$')[0] + '</span>'
                    new_text_content[i][j][1] = new_db[2][0].split('$$')[1]
                    
                    new_db[2].shift()
                }
                if(new_text_content_org[i][j].split('-')[0] == 'sep_300'){
                    new_text_content[i][j][0] = new_db[3][0].split('^^')[0]+'<span class="quote">'+new_db[3][0].split('^^')[1].split('$$')[0] + '</span>'
                    new_text_content[i][j][1] = new_db[3][0].split('$$')[1]
                    
                    new_db[3].shift()
                }
                if(new_text_content_org[i][j].split('-')[0] == 'sep_400'){
	                if(new_text_content_org[i][j].split('-')[1] == '2'){
                    new_text_content[i][j][0] = new_db[4][0][0].split('^^')[0]+'<span class="quote">'+new_db[4][0][0].split('^^')[1].split('$$')[0] + '</span>'
                    new_text_content[i][j][1] = new_db[4][0][0].split('$$')[1]
	                    new_db[4][0].shift()
	                }else{

                    new_text_content[i][j][0] = new_db[4][1][0].split('^^')[0]+'<span class="quote">'+new_db[4][1][0].split('^^')[1].split('$$')[0] + '</span>'
                    new_text_content[i][j][1] = new_db[4][1][0].split('$$')[1]
	                    new_db[4][1].shift()
	                }
                }
                if(new_text_content_org[i][j].split('-')[0] == 'sep_500'){
                    new_text_content[i][j][0] = new_db[5][0].split('^^')[0]+'<span class="quote">'+new_db[5][0].split('^^')[1].split('$$')[0] + '</span>'
                    new_text_content[i][j][1] = new_db[5][0].split('$$')[1]
                    
                    new_db[5].shift()
                }
                if(new_text_content_org[i][j].split('-')[0] == 'sep_700'){
                    new_text_content[i][j][0] = new_db[6][0].split('^^')[0]+'<span class="quote">'+new_db[6][0].split('^^')[1].split('$$')[0] + '</span>'
                    new_text_content[i][j][1] = new_db[6][0].split('$$')[1]
                    
                    new_db[6].shift()
                }
                if(new_text_content_org[i][j].split('-')[0] == 'sep_900'){
                    new_text_content[i][j][0] = new_db[7][0].split('^^')[0]+'<span class="quote">'+new_db[7][0].split('^^')[1].split('$$')[0] + '</span>'
                    new_text_content[i][j][1] = new_db[7][0].split('$$')[1]
                    
                    new_db[7].shift()
                }
                if(new_text_content_org[i][j].split('-')[0] == 'sep_1000'){
                    new_text_content[i][j][0] = new_db[8][0].split('^^')[0]+'<span class="quote">'+new_db[8][0].split('^^')[1].split('$$')[0] + '</span>'
                    new_text_content[i][j][1] = new_db[8][0].split('$$')[1]
                    
                    new_db[8].shift()
                }
                if(new_text_content_org[i][j].split('-')[0] == 'sep_2000'){
                    new_text_content[i][j][0] = new_db[9][0].split('^^')[0]+'<span class="quote">'+new_db[9][0].split('^^')[1].split('$$')[0] + '</span>'
                    new_text_content[i][j][1] = new_db[9][0].split('$$')[1]
                    
                    new_db[9].shift()
                }
                if(new_text_content_org[i][j].split('-')[0] == 'sep_img'){
                	new_text_content[i][j][0] = ''
                	for (var k = new_db[10][0][0].length - 1; k >= 0; k--) {
                			new_text_content[i][j][0] = new_text_content[i][j][0] + '<div class="sep_img_inner sep_img_inner_'+k+' sep_img_inner_whole_'+(new_db[10][0][0].length-1)+'" style = "background-image:url(img/ib_image_batch/'+new_db[10][0][0][k]+')"><span class="quote">'+new_db[10][0][1][k] + '</span></div>'
                		}
                		// new_text_content[i][j][1]= new_db[10][0][1]
                    new_db[10].shift()

                }
            }
        }
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}


























































































































































var isMobile = false;
(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) isMobile = true;})(navigator.userAgent||navigator.vendor||window.opera);
if(isMobile){$('body').addClass('mobile')}
	// for intervention popup
	var w = window.innerWidth
	var h = window.innerHeight

	var data_array
	var icon_array
	var infopopup_array = []
	var intervention_on = false
	var popup_counter = 1
	var mark_amount = 0
	var link

	var current_scroll

	var translatey = 70
	var week_whole_wrapper_animate_val_1 = 0
	var week_whole_wrapper_animate_val_2 = 0
	var currentrotation = 0
	var scroll_ani_counter =0
	var pre_final_val = 0

	var today_string = new Date().getUTCFullYear()+'/'+("0" + (new Date().getUTCMonth()+1)).slice(-2)+'/'+("0" + new Date().getUTCDate()).slice(-2)
	if(window.location.hash && window.location.hash.split('#goto_').length>1){
		today_string = window.location.hash.split('#goto_')[1].split('-')[0] + '/'+window.location.hash.split('#goto_')[1].split('-')[1] + '/'+window.location.hash.split('#goto_')[1].split('-')[2]
	}
	function get_inittime_d() {
		  const setDate = new Date("2021-01-01T00:00:00+0900");
		  const setDateYear = setDate.getFullYear();
		  const setDateMonth = setDate.getMonth() + 1;
		  const setDateDay = setDate.getDate();
		  const now = new Date();
		  const distance = setDate.getTime() - now.getTime();
		  const day = Math.floor(distance/(1000*60*60*24));
	    return Math.abs(`${day}`)
  		// const day = Math.floor(distance/(1000*60*60*24));
  
	}

	var inittime_d = get_inittime_d()
	console.log(inittime_d)





	var inittime_h = new Date().toString().split(' ')[4].split(':')[0]
	var initrotation = inittime_h/24
	var initoffset = 13
	var scrollpos = 0

	var noscroll = false
	var spiral_unit
	var center_width_r = 3
	var wholeweek_length
	var lc_counter = 1
	var wrapper_translatez = 10
	var ismobile = false
	var scrollinit = true
	var clickblock = true

	var mousepos_x = 0
	var mousepos_y = 0
	if(window.innerHeight > window.innerWidth){
		ismobile = true
	}
	if(ismobile){wrapper_translatez = 50;
		}
	var translatez = 28
	if(ismobile){translatez = 50;
		}
	var number_of_board = 20
	var week_lastpage = 0

	var scrollspeed = 0.1
	if(ismobile){scrollspeed = 0.5}

	var scrolldirection = 'down'
	var scrolldirection_value = 0
	if(!isMobile){
		var scrollbarWidth = document.querySelector('.fake_scroll_wrapper').offsetWidth - document.querySelector('.fake_scroll_wrapper').clientWidth;
		$('head').append('<style type="text/css">\
			.week_frame,.spiral_frame,.week_whole_wrapper_wrapper, .week_frame{\
				width:calc(100vw - '+scrollbarWidth+'px) !important;\
				overflow:hidden !important\
			}\
			</style>');
	}
	var week_array = ['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18']

if(window.location.hash && window.location.hash.split('#')[1] === 'spiral') {
	$('body').addClass('spiral_view')
} else if(window.location.hash && window.location.hash.split('#')[1] === 'week'){
	$('body').addClass('week_view')
} else if(window.location.hash && window.location.hash.split('#')[1] === 'autoscroll'){
	$('body').addClass('week_view')
	scroll_ani()
}else{
	$('body').addClass('week_view')
	window.location.hash = 'week';
}
setTimeout(function(){
// switch_view()
},3000)
function getWeekNumber(d) {
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay()||7));
    var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
    var weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7);
    return weekNo
}
timeplay()
function timeplay(){
    document.title = String(new Date()).substring(4).split(' GMT')[0]
    setTimeout(function(){timeplay()},1000)
}
function parseDate(str) {
    var mdy = str.split('/');
    return new Date(2021, 10, 19);
}




// 1
get_data_array()
function get_data_array() {
    var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
            icon_array = JSON.parse(this.responseText).values
        }
    }
    xhttp.open("GET", "https://sheets.googleapis.com/v4/spreadsheets/1j4pOnmU4NTyM7XoeXHG67Uy7VMfT_bAp4Kt0JxokUag/values/Items?key=AIzaSyAmcp44cOi9-6XM4EqjCjIQLbj_D__1YPE");
    xhttp.send();
    var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
            data_array = JSON.parse(this.responseText).values
            console.log(data_array)
            
            wholeweek_length = (data_array.length-1)
            spiral_unit = (w)/(wholeweek_length*2 + center_width_r*2)

    		for (var i = 0; i < week_array.length; i++) {
    			if(i == week_array.length-1){
					create_board(data_array, i, (week_array.length-i+1)*0 + translatez, true)
    			}else{
					create_board(data_array, i, (week_array.length-i+1)*0 + translatez, false)
    			}
    		}
    		for (var i = 0; i < week_array.length; i++) {
				create_spiral(data_array, i, (week_array.length-i)*(50/(week_array.length+1)), false)
    		}
            		popup()
    				// analyze_data(data_array)
    				set_spiral_position()
    				week_lastpage_swipe()
        };
    }
    xhttp.open("GET", "https://sheets.googleapis.com/v4/spreadsheets/1j4pOnmU4NTyM7XoeXHG67Uy7VMfT_bAp4Kt0JxokUag/values/Info?key=AIzaSyAmcp44cOi9-6XM4EqjCjIQLbj_D__1YPE");
    xhttp.send();
}




 // 667 : 125

// 2
			function create_board(data_array, k, translatez, callback){
            		var number_of_board = week_array.length-k + 2
            		var classname = 'weekwrapper_'+week_array[k]

					$('.week_whole_wrapper').append('\
						<div class="weekwrapper '+classname+'" \
						style="transform:translateY('+(k)*translatey+'vh)"\
						></div>')
	            		for (var i = 0; i < number_of_board; i++) {
							$('.'+classname).append('\
								<div class="week board board_info_time_'+i+' rotatey_'+Math.floor((-360/number_of_board)*i)+'" style="\
								width:'+(get_width(translatez,number_of_board))+'vw;\
								transform:translateX(-50%) rotateY('+((-360/number_of_board)*i)+'deg) translateZ(-'+translatez+'vw);\
								">\
									<div class="week_board_inner"></div>\
									<div class="text_inner" style="\
									margin-left:'+ (-1*get_width(translatez,number_of_board)*(i)) +'vw;\
									width:'+ (number_of_board*100) +'%;">\
											<div class="text_inner_wrapper">\
											</div>\
									</div>\
								</div>')
							    append_weekinfo(i,k,classname)
							    append_weekitems(i,k,classname)
								if(i == number_of_board-1){
										$('.'+classname).find('.text_inner_wrapper').append('\
										<div class="text_inner_content text_inner_content_1 ' + new_text_content_org[(k+inittime_d)%42][0] + ' text_inner_content_link_'+new_text_content[(k+inittime_d)%42][0][1]+'">' + new_text_content[(k+inittime_d)%42][0][0]+ '</span></div>\
										<div class="text_inner_content text_inner_content_2 ' + new_text_content_org[(k+inittime_d)%42][1] + ' text_inner_content_link_'+new_text_content[(k+inittime_d)%42][1][1]+'">' + new_text_content[(k+inittime_d)%42][1][0]+ '</span></div>\
										<div class="text_inner_content text_inner_content_3 ' + new_text_content_org[(k+inittime_d)%42][2] + ' text_inner_content_link_'+new_text_content[(k+inittime_d)%42][2][1]+'">' + new_text_content[(k+inittime_d)%42][2][0]+ '</span></div>\
										')
										var a = $('.'+classname).find('.text_inner_wrapper').outerWidth()
										// console.log(a)
										var b = $('.'+classname).find('.text_inner_content_1').outerWidth()
										var c = $('.'+classname).find('.text_inner_content_2').outerWidth()
										var d = $('.'+classname).find('.text_inner_content_3').outerWidth()
											console.log($('.'+classname).find('.text_inner_content_3').outerWidth())
										$('.'+classname).find('.text_inner_wrapper').addClass('text_inner_wrapper_'+(k+inittime_d)%42)
										if(new_text_content_org[(k+inittime_d)%42][0].split('-')[0]==='sep_img'){
											$('.'+classname+' .text_inner_content_1').addClass('sep_img')
											// b = 0
											// console.log(b)
										}
										if(new_text_content_org[(k+inittime_d)%42][1].split('-')[0]==='sep_img'){
											$('.'+classname+' .text_inner_content_2').addClass('sep_img')
											// c = 0
											// console.log(c)
										}
										if(new_text_content_org[(k+inittime_d)%42][2].split('-')[0]==='sep_img'){
											// console.log($('.'+classname).find('.text_inner_content_3').parent().attr('class'))
											$('.'+classname+' .text_inner_content_3').addClass('sep_img')
											d = 0
											// console.log($('.'+classname).find('.text_inner_content_3').outerWidth())
											// console.log($('.'+classname+' .text_inner_content_3'))
										}
										if($('.'+classname).find('.text_inner_wrapper').eq(0).find('.sep_img').length==1){
											$('.'+classname).find('.sep_img').css({'width':(a-b-c-d) + 'px'})
										}
										if($('.'+classname).find('.text_inner_wrapper').eq(0).find('.sep_img').length==2){
											$('.'+classname).find('.sep_img').css({'width':(a-b-c-d)/2 + 'px'})
										}


										// 개수줄이
										var  left_array = [0]
										var  width_array = []
										var k = 1/$('.'+classname).find('.board').length
										var whole_w = $('.'+classname).find('.text_inner_wrapper').outerWidth()
										// console.log(whole_w)
										$('.'+classname).find('.text_inner_wrapper').each(function(){
											// console.log($('.'+classname))
											// console.log($(this).outerWidth())
										})
										$('.'+classname).find('.board_info_time_'+i).find('.text_inner_content').each(function(index){
											 left_array.push($(this).outerWidth()/$(this).parent().outerWidth() + left_array[index]) 
											 width_array.push($(this).outerWidth()/$(this).parent().outerWidth()) 
											$('.'+classname).find('.text_inner_content_'+(index+1)).attr('style','left:'+(left_array[index]*whole_w)+'px !important; position:absolute !important; width:'+width_array[index]*whole_w+'px')
											// $('.'+classname).find('.text_inner_content_'+(index+1)).css({'left':(left_array[index])+'% !important'})
											if(index == 2){
												// $('.'+classname).find('.text_inner_content').attr('style','left:'+(left_array[index])+'% !important')
												// $('.'+classname).find('.text_inner_content').attr('style', 'position:absolute !important')
												$('.'+classname).find('.board').each(function(index_inner){
													for (var q = left_array.length - 2; q >= 0; q--) {
														if(((k*index_inner)>=left_array[q]&&
															(k*index_inner)<=left_array[q+1])
															||
															((k*index_inner)+k)>=left_array[q]&&
															((k*index_inner)+k)<=left_array[q+1]){
															}else{
															$(this).find('.text_inner_content_'+(q+1)).remove()
														}
													}
												})

											}
										})



									if(callback){

										$('.fake_scroll').css({'height':(18*translatey/scrollspeed) + 'vh'})
										$('.fake_scroll_wrapper').scrollTop((translatey*(initoffset + initrotation) / scrollspeed)*(window.innerHeight/100))
										console.log($('.fake_scroll_wrapper').scrollTop())
										scrollpos = ($('.fake_scroll_wrapper').scrollTop())/(window.innerHeight/100) * scrollspeed
							            rotate_time(true)
						            	week_scroll()
						            	show_week()
						            	settingup_lastpage()
							            setTimeout(function(){hovereffect()},1000)
							        }
									$('.'+classname).find('.text_inner_wrapper').css({'transform':'scaleX('+($('.'+classname).find('.board_info_time_0').find('.text_inner').outerWidth()/$('.'+classname).find('.board_info_time_0').find('.text_inner_wrapper').outerWidth())+')'})
									$('.text_inner_content_link').hover(function(){
										var val = $(this).attr('class').split('text_inner_content_link_')[1].split(' ')[0]
										$('.text_inner_content_link_'+val).addClass('text_inner_content_link_hovered')
									}, function(){
										$('.text_inner_content_link_hovered').removeClass('text_inner_content_link_hovered')
									})
								}
						}
			}
			var spiral_margintop_array = [0,0,0,0,0,0,0,0.1,0.4,0.9,1.6,2.5,3.6,4.9,6.4+1,8.1+2,10+4,12.1+6,14.4+6]
            function create_spiral(data_array, k, translatez, callback){
            		var number_of_board = week_array.length-k + 2
            		var classname = 'spiralwrapper_' + week_array[k]
            		if(parseInt(week_array[k])<initoffset+1){
	            		$('.spiral_whole_wrapper').append('\
							<div class="spiralwrapper '+classname+'" \
								style="transform:translateX(-50%) translateY(-50%);\
								margin-top:'+spiral_margintop_array[0]+'vh"\
							></div>')
	            		$('.'+classname).addClass('spiralwrapper_upper')
	            	}else{
			           	var value = parseInt(week_array[k])-(initoffset+1)
	            		$('.spiral_whole_wrapper').append('\
							<div class="spiralwrapper '+classname+'" \
								style="transform:translateX(-50%) translateY(-50%) translateY(100%) scaleY('+(1+value/10)+');\
								margin-top:'+spiral_margintop_array[0]+'vh"\
							></div>')
	            		$('.'+classname).addClass('spiralwrapper_lower')
			           	$('.'+classname).css({'top':(value*1)+'vw'})
	            	}


            		for (var i = 0; i < number_of_board; i++) {
								$('.'+classname).append('<div class="spiral board board_info_time_'+i+'" style="\
									width:'+(get_width(translatez,number_of_board))+'vw;\
									transform:translateX(-50%) rotateY('+((-360/number_of_board)*i)+'deg) translateZ(-'+translatez+'vw);\
									">\
									<div class="spiral_board_inner spiral_board_inner_outerwall"></div>\
									<div class="text_inner" style="\
									margin-left:'+ (-1*get_width(translatez,number_of_board)*(i)) +'vw;\
									width:'+ (number_of_board*100) +'%;"\
									><div class="text_inner_wrapper"></div></div>\
									</div>')
				            			if(parseInt(week_array[k])<initoffset+2){
					            			$('.'+classname).find('.spiral_board_inner_outerwall').css({'opacity':1})
						            	}else{
					            			$('.'+classname).find('.spiral_board_inner_outerwall').css({'opacity':0})
						            	}
							if(i == number_of_board-1){
								if( week_array[k]<12
									){
									$('.'+classname).find('.text_inner_wrapper').append('\
									<div class="text_inner_content text_inner_content_1  ' + new_text_content_org[(k+inittime_d)%42][0] + '">' + new_text_content[(k+inittime_d)%42][0][0]+'</span></div>\
									<div class="text_inner_content text_inner_content_2 ' + new_text_content_org[(k+inittime_d)%42][1] + '">' + new_text_content[(k+inittime_d)%42][1][0]+'</span></div>\
									<div class="text_inner_content text_inner_content_3 ' + new_text_content_org[(k+inittime_d)%42][2] + '">' + new_text_content[(k+inittime_d)%42][2][0]+'</span></div>\
									')
										$('.'+classname).find('.text_inner_wrapper').addClass('text_inner_wrapper_'+(k+inittime_d)%42)
										if(new_text_content_org[(k+inittime_d)%42][0].split('-')[0]==='sep_img'){
											$('.'+classname+' .text_inner_content_1').addClass('sep_img')}
										if(new_text_content_org[(k+inittime_d)%42][1].split('-')[0]==='sep_img'){
											$('.'+classname+' .text_inner_content_2').addClass('sep_img')}
										if(new_text_content_org[(k+inittime_d)%42][2].split('-')[0]==='sep_img'){
											$('.'+classname+' .text_inner_content_3').addClass('sep_img')}
										var a = $('.'+classname).find('.text_inner_wrapper').outerWidth()
										var b = $('.'+classname).find('.text_inner_content_1').outerWidth()
										var c = $('.'+classname).find('.text_inner_content_2').outerWidth()
										var d = $('.'+classname).find('.text_inner_content_3').outerWidth()
										if($('.'+classname).find('.text_inner_wrapper').eq(0).find('.sep_img').length==1){
											$('.'+classname).find('.sep_img').css({'width':(a-b-c-d) + 'px'})
										}
										if($('.'+classname).find('.text_inner_wrapper').eq(0).find('.sep_img').length==2){
											$('.'+classname).find('.sep_img').css({'width':(a-b-c-d)/2 + 'px'})
										}
										var  left_array = [0]
										var  width_array = []
										var k = 1/$('.'+classname).find('.board').length
										var whole_w = $('.'+classname).find('.text_inner_wrapper').outerWidth()
										$('.'+classname).find('.board_info_time_'+i).find('.text_inner_content').each(function(index){
											 left_array.push($(this).outerWidth()/$(this).parent().outerWidth() + left_array[index]) 
											 width_array.push($(this).outerWidth()/$(this).parent().outerWidth()) 
											$('.'+classname).find('.text_inner_content_'+(index+1)).attr('style','left:'+(left_array[index]*whole_w)+'px !important; position:absolute !important; width:'+width_array[index]*whole_w+'px')
											// $('.'+classname).find('.text_inner_content_'+(index+1)).css({'left':(left_array[index])+'% !important'})
											if(index == 2){
												// $('.'+classname).find('.text_inner_content').attr('style','left:'+(left_array[index])+'% !important')
												// $('.'+classname).find('.text_inner_content').attr('style', 'position:absolute !important')
												$('.'+classname).find('.board').each(function(index_inner){
													for (var q = left_array.length - 2; q >= 0; q--) {
														if(((k*index_inner)>=left_array[q]&&
															(k*index_inner)<=left_array[q+1])
															||
															((k*index_inner)+k)>=left_array[q]&&
															((k*index_inner)+k)<=left_array[q+1]){
															}else{
															$(this).find('.text_inner_content_'+(q+1)).remove()
														}
													}
												})

											}
										})
									}
								}
					}     	
            }

			function get_width(translatez,number_of_board){
				return translatez*Math.tan((360/(number_of_board*2)) * Math.PI / 180)	*2
			}
            function pos_to_rot(value){
            	return parseInt(map_range(value, 0, translatey, 360, 0))
            }
            function set_spiral_position(){
            	$('.camera_view').css({'height':(week_array.length - initoffset + center_width_r)*spiral_unit +'px'})
            }
// 3
            function append_weekinfo(selectedboard,selectedweek,selectedclass){
	        		if(parseInt(data_array[selectedweek+1][selectedboard+2]) !== 0){
	        				$('.'+selectedclass+' .board_info_time_'+selectedboard).append('<div class="popups popups_info">'+data_array[selectedweek+1][selectedboard+2]+'</div>')
	        				$('.'+selectedclass+' .board_info_time_'+selectedboard).addClass('popup_parent')
	        				var value = $('.'+selectedclass+' .board_info_time_'+selectedboard).attr('class').split('rotatey_')[1].split(' ')[0]
	        				$('.'+selectedclass+' .board_info_time_'+selectedboard).css({'transform':'translateX(-50%) rotateY('+value+'deg) translateZ(-24vw)'})
	        				// $('.'+selectedclass+' .board_info_time_'+selectedboard).attr('class').split('_')
	        				// $('.'+selectedclass+' .board_info_time_'+selectedboard).css({'transform':})
	        		}
            }

			function removeItemAll(arr, value) {
			  var i = 0;
			  while (i < arr.length) {
			    if (arr[i] === value) {
			      arr.splice(i, 1);
			    } else {
			      ++i;
			    }
			  }
			  return arr;
			}
            function append_weekitems(selectedboard,selectedweek,selectedclass){
            	if(typeof icon_array == 'undefined'){
            		setTimeout(function(){append_weekitems(selectedboard,selectedweek,selectedclass)},500)
            	}else{
	        		if(icon_array[selectedweek+1][selectedboard+2] === 'clock'){
	        				$('.'+selectedclass+' .board_info_time_'+selectedboard).append('<div class="popups popups_icon popups_icon_clock"></div>')
	        				$('.'+selectedclass+' .board_info_time_'+selectedboard+' .popups').addClass('popup_original').prepend('<div class="popups_tab"><div class="close"></div></div>')
	        				$('.'+selectedclass+' .board_info_time_'+selectedboard+' .popups').clone().removeClass('popup_original').addClass('popup_shadow').insertBefore($('.'+selectedclass+' .board_info_time_'+selectedboard+' .popup_original'))
	        		}
	        		if(icon_array[selectedweek+1][selectedboard+2] === 'podcast'){
	        				$('.'+selectedclass+' .board_info_time_'+selectedboard).append('<div class="popups popups_icon popups_icon_podcast"></div>')
	        				$('.'+selectedclass+' .board_info_time_'+selectedboard+' .popups').addClass('popup_original').prepend('<div class="popups_tab"><div class="close"></div></div>')
	        				$('.'+selectedclass+' .board_info_time_'+selectedboard+' .popups').clone().removeClass('popup_original').addClass('popup_shadow').insertBefore($('.'+selectedclass+' .board_info_time_'+selectedboard+' .popup_original'))
	        		}
	        		if(icon_array[selectedweek+1][selectedboard+2] === 'weather'){
	        				$('.'+selectedclass+' .board_info_time_'+selectedboard).append('<div class="popups popups_icon popups_icon_weather"></div>')
	        				$('.'+selectedclass+' .board_info_time_'+selectedboard+' .popups').addClass('popup_original').prepend('<div class="popups_tab"><div class="close"></div></div>')
	        				$('.'+selectedclass+' .board_info_time_'+selectedboard+' .popups').clone().removeClass('popup_original').addClass('popup_shadow').insertBefore($('.'+selectedclass+' .board_info_time_'+selectedboard+' .popup_original'))
	        		}
            	}
            }




// 4

			function scroll_ani(){
				var scroll_array = [14,110,238]
				$('.fake_scroll_wrapper').scrollTop(parseInt(scroll_array[scroll_ani_counter%scroll_array.length])/scrollspeed*(window.innerHeight/100))

				move_wrapper(false)
				scroll_ani_counter ++
				setTimeout(function(){
					scroll_ani()
				},1000)
			}
            function week_scroll(){
            	$('.week_whole_wrapper').css({'transition':'transform 0s'})
	            $('.fake_scroll_wrapper').on('scroll', function() {
            		$('.week_whole_wrapper').css({'transition':'transform 0s'})
					$('.transition').removeClass('transition')
					 scrollpos = ($('.fake_scroll').outerHeight()-$('.fake_scroll_wrapper').scrollTop())/(window.innerHeight/100) * scrollspeed
	            	if(scrollinit||intervention_on){
	            		if(scrollinit){
	            			move_wrapper(true)
	            		}
	            		scrollinit = false
	            		console.log('hlk')
	            	}else{
	            		$('.followcursor').css({'opacity':0})
	            		clickblock = false
					    // down to top
					    // scrollpos = ($('.fake_scroll_wrapper').scrollTop())/(window.innerHeight/100) * scrollspeed
					    // console.log($('.fake_scroll_wrapper').scrollTop()/$('.fake_scroll_wrapper').outerHeight()
					    move_wrapper(false)
	            	}

					$('.camera_wrapper').css({'transform':'rotateX(90deg) rotateZ('+(pos_to_rot(scrollpos+currentrotation)+90)+'deg)'})
					if(pos_to_rot(scrollpos+currentrotation)%360 < 180){
            			$('.camera_view').css({'height':(wholeweek_length - initoffset + center_width_r)*spiral_unit+0.5*spiral_unit  +'px'})
					}else{
            			$('.camera_view').css({'height':(wholeweek_length - initoffset + center_width_r)*spiral_unit +'px'})
					}
					// console.log(scrollpos)
				});
            }
            function intervention(content,degree){
             	$('.intervention').empty()
				$('.intervention_wrapper').show()
				content.find('iframe').each(function(index){
					$('.intervention').append(this)
					if(index = content.find('iframe').length-1){
						content.find('iframe').remove()
					}
				})
			    var text = content.html()
				// if()
            		var text_array = text.split(' ')
            		for (var j = 0; j < text_array.length; j++) {
            			if(j>0){
            				$('.intervention').append('<span class="textspan textspan_'+j+'"> '+text_array[j]+'</span>')
            			}else{
            				$('.intervention').append('<span class="textspan textspan_'+j+'">'+text_array[j]+'</span>')
            			}
            			if(j == text_array.length-1){
			            	setTimeout(function(){
		        				text_animation(0)
		        				$('.textspan').hide()
		    					$('.intervention_hide').hide()
						   		$('.intervention_wrapper').css({'opacity':1})
			            	},50)
            			}
            		}
            	$('.intervention_close').click(function(){
            				$('.weekwarpper_current').find('.rotatey_'+degree).css({'transform':'translateX(-50%) rotateY('+degree+'deg) translateZ(-24vw)'})
							$('.week_whole_wrapper').css({'transform':'perspective(50vh) rotateX(0deg) translateY( '+ (-1*(Math.floor(scrollpos/translatey)*translatey)) +'vh) translateZ('+wrapper_translatez+'vw)  rotateY('+pos_to_rot(scrollpos+currentrotation)+'deg)'})
							intervention_on = false
	            			$('.textspan').hide()
		    					$('.intervention_hide').show()
				    		$('.intervention_wrapper').hide()
						   	$('.intervention_wrapper').css({'opacity':0})
            	})
            }
            function text_animation(spancounter_ani){
            	$('.textspan_'+spancounter_ani).show()
            	setTimeout(function(){
            		text_animation(spancounter_ani+1)
            	},100)
            }
            function rotate_time(init){
            	currentrotation = currentrotation - 360/(24*60*6)
            	if(!init){
					move_wrapper(false)
				}
				$('.camera_wrapper').css({'transform':'rotate('+(pos_to_rot(scrollpos+currentrotation)+90)+'deg)'})
				if(pos_to_rot(scrollpos+currentrotation)%360 < 180){
				}else{
				}
				setTimeout(function(){rotate_time(false)},10000)
            }
            function move_wrapper(init){
            	if(scrollpos > scrolldirection_value){
            		scrolldirection = 'down'
            	}else{
            		scrolldirection = 'up'
            	}
            	scrolldirection_value = scrollpos


            	var transition = 0
            	var transition_unit = 0
            	if(scrollpos%translatey > (translatey - 20)){
            		transition_unit = (20-(translatey-scrollpos%translatey))/2
            		transition = (translatey-scrollpos%translatey) * translatey/20
            	}
            	var k = Math.floor(scrollpos/translatey)
            	setTimeout(function(){
            	},1000)
            	if(init){
            				$('.weekwrapper_'+ Math.floor(k-2)).addClass('weekwarpper_prev2')
							$('.weekwrapper_'+ Math.floor(k-1)).addClass('weekwarpper_prev1')
							$('.weekwrapper_'+ Math.floor(k-0)).addClass('weekwarpper_current')
							$('.weekwrapper_'+ Math.floor(k+1)).addClass('weekwarpper_next1')
							$('.weekwrapper_'+ Math.floor(k+2)).addClass('weekwarpper_next2')
							$('.weekwrapper_'+ Math.floor(k+3)).addClass('weekwarpper_next3')
            				$('.weekwarpper_prev2').find('.week_board_inner').show()
							// $('.weekwarpper_prev2').find('.week_board_inner').css({'height':'75%'})
							$('.weekwarpper_prev1').find('.week_board_inner').show()
							// $('.weekwarpper_prev1').find('.week_board_inner').css({'height':'200%'})
							$('.weekwarpper_current').find('.week_board_inner').hide()
							$('.weekwarpper_next1').find('.week_board_inner').show()
							// $('.weekwarpper_next1').find('.week_board_inner').css({'height':'100%'})
							$('.weekwarpper_next2').find('.week_board_inner').show()
							// $('.weekwarpper_next2').find('.week_board_inner').css({'height':'75%'})
							$('.weekwarpper_next3').find('.week_board_inner').show()
							// $('.weekwarpper_next3').find('.week_board_inner').css({'height':'50%'})
						}

   				if($('.fake_scroll_wrapper').scrollTop() + $(window).height() > $('.fake_scroll').height()-100) {
   					// --------------------------------------------마지막부 original--------------------------------------------
     	  			//	current_scroll = k
   		 			//	$('.week_lastpage_arrowl').show()
					// $('.week_lastpage_arrowr').show()
   		 			//	$('.week_whole_wrapper').addClass('week_whole_wrapper_animate')
   		 			//	if(w/h>1/1){
		 			//        if(week_lastpage == 0){$('.week_whole_wrapper').css({'transform':'perspective(40vh) rotateX(0deg) translateY( '+ -1*((week_array.length-1)*translatey) +'vh) translateZ('+wrapper_translatez+'vw)  rotateY('+(0+pos_to_rot(Math.floor(scrollpos/translatey+1)*translatey))+'deg)'})}
		 			//        if(week_lastpage == 1){$('.week_whole_wrapper').css({'transform':'perspective(40vh) rotateX(0deg) translateY( '+ -1*((week_array.length-1)*translatey) +'vh) translateZ('+wrapper_translatez+'vw)  rotateY('+(120+pos_to_rot(Math.floor(scrollpos/translatey+1)*translatey))+'deg)'})}
		 			//        if(week_lastpage == 2){$('.week_whole_wrapper').css({'transform':'perspective(40vh) rotateX(0deg) translateY( '+ -1*((week_array.length-1)*translatey) +'vh) translateZ('+wrapper_translatez+'vw)  rotateY('+(240+pos_to_rot(Math.floor(scrollpos/translatey+1)*translatey))+'deg)'})}
		 			//    }else{
		 			//        if(week_lastpage == 0){$('.week_whole_wrapper').css({'transform':'perspective(30vh) scale(0.55) rotateX(0deg) translateY( '+ -1*((week_array.length-1)*translatey) +'vh) translateZ('+wrapper_translatez+'vw)  rotateY('+(0+pos_to_rot(Math.floor(scrollpos/translatey+1)*translatey))+'deg) '})}
		 			//        if(week_lastpage == 1){$('.week_whole_wrapper').css({'transform':'perspective(30vh) scale(0.55) rotateX(0deg) translateY( '+ -1*((week_array.length-1)*translatey) +'vh) translateZ('+wrapper_translatez+'vw)  rotateY('+(120+pos_to_rot(Math.floor(scrollpos/translatey+1)*translatey))+'deg) '})}
		 			//        if(week_lastpage == 2){$('.week_whole_wrapper').css({'transform':'perspective(30vh) scale(0.55) rotateX(0deg) translateY( '+ -1*((week_array.length-1)*translatey) +'vh) translateZ('+wrapper_translatez+'vw)  rotateY('+(240+pos_to_rot(Math.floor(scrollpos/translatey+1)*translatey))+'deg) '})}
		 			//    }
					// --------------------------------------------마지막부 original--------------------------------------------
            	}else{
            				
            		$('.week_lastpage_arrowl').hide()
					$('.week_lastpage_arrowr').hide()
					$('.lastpage_popupbox').hide()
            		$('.week_whole_wrapper').removeClass('week_whole_wrapper_animate')

	            	if(scrolldirection === 'down' && transition_unit!==10 && transition_unit!==0){
            				
	            		$('.weekwrapper_'+ Math.floor(k-2)).css({transform : 'translateY('+((k-2)*translatey)+'vh) translateY('+map_range(transition_unit, 0, 10, -50, -20 )+'vh) scaleX('+map_range(transition_unit, 0, 10, 5.0, 7.0)+') scaleZ('+map_range(transition_unit, 0, 10, 5.0, 7.0)+')'})
	            		$('.weekwrapper_'+ Math.floor(k-1)).css({transform : 'translateY('+((k-1)*translatey)+'vh) translateY('+map_range(transition_unit, 0, 10, -20, -50 )+'vh) scaleX('+map_range(transition_unit, 0, 10, 3, 5.0)+') scaleZ('+map_range(transition_unit, 0, 10, 3, 5.0)+')'})
	            		
	            		$('.weekwrapper_'+ Math.floor(k-0)).css({transform : 'translateY('+((k-0)*translatey)+'vh) translateY('+map_range(transition_unit, 0, 10,  -2.5, -20  )+'vh) scaleX('+map_range(transition_unit, 0, 10, 1, 3)+') scaleZ('+map_range(transition_unit, 0, 10, 1, 3)+')'})
	            		$('.weekwrapper_'+ Math.floor(k+1)).css({transform : 'translateY('+((k+1)*translatey)+'vh) translateY('+map_range(transition_unit, 0, 10,  -13, 0 )+'vh) scaleX('+map_range(transition_unit, 0, 10, .50, 1)+') scaleZ('+map_range(transition_unit, 0, 10, .50, 1)+')'})
	            		$('.weekwrapper_'+ Math.floor(k+2)).css({transform : 'translateY('+((k+2)*translatey)+'vh) translateY('+map_range(transition_unit, 0, 10, -86, -13)+'vh) scaleX('+map_range(transition_unit, 0, 10, .25, .50)+') scaleZ('+map_range(transition_unit, 0, 10, .25, .50)+')'})
	            		$('.weekwrapper_'+ Math.floor(k+3)).css({transform : 'translateY('+((k+3)*translatey)+'vh) translateY('+map_range(transition_unit, 0, 10, -156, -86)+'vh) scaleX('+map_range(transition_unit, 0, 10, .2, .25)+') scaleZ('+map_range(transition_unit, 0, 10, .2, .25)+')'})
	            		$('.weekwrapper_'+ Math.floor(k+4)).css({transform : 'translateY('+((k+4)*translatey)+'vh) translateY('+map_range(transition_unit, 0, 10, -0, -156)+'vh) scaleX('+map_range(transition_unit, 0, 10, .0, .2)+') scaleZ('+map_range(transition_unit, 0, 10, .0, .2)+')'})

 	             		$('.spiralwrapper_'+ Math.floor(k+1)).css({transform:'translateX(-50%) translateY(-50%)  translateY('+(10-transition_unit)*10+'%)'}) 
	            	}else if(scrolldirection === 'up' && transition_unit!==10 && transition_unit!==0){
            				
	            		$('.weekwrapper_'+ Math.floor(k-2)).css({transform : 'translateY('+((k-2)*translatey)+'vh) translateY('+map_range(transition_unit, 10, 0, -20  ,-50)+'vh) scaleX('+map_range(transition_unit, 10, 0, 7.0, 5.0)+') scaleZ('+map_range(transition_unit, 10, 0, 7.0, 5.0)+')'})
	            		$('.weekwrapper_'+ Math.floor(k-1)).css({transform : 'translateY('+((k-1)*translatey)+'vh) translateY('+map_range(transition_unit, 10, 0, -50, -20 )+'vh) scaleX('+map_range(transition_unit, 10, 0, 5.0, 3)+') scaleZ('+map_range(transition_unit, 10, 0, 5.0, 3)+')'})
	            		
	            		$('.weekwrapper_'+ Math.floor(k-0)).css({transform : 'translateY('+((k-0)*translatey)+'vh) translateY('+map_range(transition_unit, 10, 0,  -20,  0 )+'vh) scaleX('+map_range(transition_unit, 10, 0, 3, 1)+') scaleZ('+map_range(transition_unit, 10, 0, 3, 1)+')'})
	            		$('.weekwrapper_'+ Math.floor(k+1)).css({transform : 'translateY('+((k+1)*translatey)+'vh) translateY('+map_range(transition_unit, 10, 0,  -2.5 , -13)+'vh) scaleX('+map_range(transition_unit, 10, 0, 1, .50)+') scaleZ('+map_range(transition_unit, 10, 0, 1, .50)+')'})
	            		$('.weekwrapper_'+ Math.floor(k+2)).css({transform : 'translateY('+((k+2)*translatey)+'vh) translateY('+map_range(transition_unit, 10, 0, -13, -86)+'vh) scaleX('+map_range(transition_unit, 10, 0, .50, .25)+') scaleZ('+map_range(transition_unit, 10, 0, .50, .25)+')'})
	            		$('.weekwrapper_'+ Math.floor(k+3)).css({transform : 'translateY('+((k+3)*translatey)+'vh) translateY('+map_range(transition_unit, 10, 0, -86, -156)+'vh) scaleX('+map_range(transition_unit, 10, 0, .50, .2)+') scaleZ('+map_range(transition_unit, 10, 0, .50, .2)+')'})


 	             		$('.spiralwrapper_'+ Math.floor(k+1)).css({transform:'translateX(-50%) translateY(-50%)  translateY('+(10-transition_unit)*10+'%)'})
	            	}else{
            				
            				
            			if(current_scroll !== k){
				    		initoffset = k
            				current_scroll = k
            				
            				$('.weekwarpper_prev2').removeClass('weekwarpper_prev2')
							$('.weekwarpper_prev1').removeClass('weekwarpper_prev1')
							$('.weekwarpper_current').removeClass('weekwarpper_current')
							$('.weekwarpper_next1').removeClass('weekwarpper_next1')
							$('.weekwarpper_next2').removeClass('weekwarpper_next2')
							$('.weekwarpper_next3').removeClass('weekwarpper_next3')
            				$('.weekwrapper_'+ Math.floor(k-2)).addClass('weekwarpper_prev2')
							$('.weekwrapper_'+ Math.floor(k-1)).addClass('weekwarpper_prev1')
							$('.weekwrapper_'+ Math.floor(k-0)).addClass('weekwarpper_current')
							$('.weekwrapper_'+ Math.floor(k+1)).addClass('weekwarpper_next1')
							$('.weekwrapper_'+ Math.floor(k+2)).addClass('weekwarpper_next2')
							$('.weekwrapper_'+ Math.floor(k+3)).addClass('weekwarpper_next3')
            				$('.weekwarpper_prev2').find('.week_board_inner').show()
							$('.weekwarpper_prev1').find('.week_board_inner').show()
							$('.weekwarpper_current').find('.week_board_inner').hide()
							$('.weekwarpper_next1').find('.week_board_inner').show()
							$('.weekwarpper_next2').find('.week_board_inner').show()
							$('.weekwarpper_next3').find('.week_board_inner').show()
		            		$('.weekwrapper_'+ Math.floor(k-2)).css({transform : 'translateY('+((k-2)*translatey)+'vh) translateY(-20vh) scaleX(4.0) scaleZ(4.0)'})
		            		$('.weekwrapper_'+ Math.floor(k-1)).css({transform : 'translateY('+((k-1)*translatey)+'vh) translateY(-5vh)  scaleX(2.5) scaleZ(2.5)'})
		            		$('.weekwrapper_'+ Math.floor(k-0)).css({transform : 'translateY('+((k-0)*translatey)+'vh) translateY(-2.5vh)'})
		            		$('.weekwrapper_'+ Math.floor(k+1)).css({transform : 'translateY('+((k+1)*translatey)+'vh) translateY(-13vh) scaleX(.50) scaleZ(.50)'})
		            		$('.weekwrapper_'+ Math.floor(k+2)).css({transform : 'translateY('+((k+2)*translatey)+'vh) translateY(-86vh) scaleX(.25) scaleZ(.25)'})
		            		$('.weekwrapper_'+ Math.floor(k+3)).css({transform : 'translateY('+((k+3)*translatey)+'vh) translateY(-156vh) scaleX(.2) scaleZ(.2)'})
		            		$('.spiralwrapper').each(function(index){
			            		if(index<k+1){
			            			$(this).css({transform:'translateX(-50%) translateY(-50%)  translateY(0%)'})
			            			$(this).addClass('spiralwrapper_upper')
			            			$(this).removeClass('spiralwrapper_lower')
				            	}else{
			            			$(this).css({transform:'translateX(-50%) translateY(-50%)  translateY(100%)'})
			            			$(this).addClass('spiralwrapper_lower')
			            			$(this).removeClass('spiralwrapper_upper')
			            			var value = parseInt($(this).attr('class').split('spiralwrapper_')[1].split(' ')[0])-(k+1)
			            			$(this).css({'top':(value*2)+'vw'})
				            	}
			            		if(index<k+2){
			            			$(this).find('.spiral_board_inner_outerwall').css({'opacity':1})
				            	}else{
			            			$(this).find('.spiral_board_inner_outerwall').css({'opacity':0})
				            	}
		            		})
			            	infopopup_array = []
			            	$('.weekwarpper_current').find('.popups_info').each(function(){
			            		infopopup_array.push(parseInt($(this).parent().attr('class').split('rotatey_')[1].split(' ')[0]))
			            	})
			            	// console.log('hey')
            			}
	            	}
	            	
	   						// console.log(pos_to_rot(scrollpos+currentrotation))
            		if(scrolldirection === 'down' && transition>0){
	   					if(w/h>1/1){
							$('.week_whole_wrapper').css({'transform':' perspective(40vh) rotateX(0deg) translateY( '+ (-1*(Math.floor(scrollpos/translatey)*translatey)-(translatey-transition)) +'vh) translateZ('+wrapper_translatez+'vw)  rotateY('+pos_to_rot(scrollpos+currentrotation)+'deg)'})
							week_whole_wrapper_animate_val_1 = -1*(Math.floor(scrollpos/translatey)*translatey)-(translatey-transition)
							week_whole_wrapper_animate_val_2 = wrapper_translatez
							
						}else{
							$('.week_whole_wrapper').css({'transform':' perspective(41.5vh) scaleY(0.55) scaleX(0.6) rotateX(0deg) translateY( '+ (-1*(Math.floor(scrollpos/translatey)*translatey)-(translatey-transition)) +'vh) translateZ('+wrapper_translatez+'vw)  rotateY('+pos_to_rot(scrollpos+currentrotation)+'deg)'})	
							week_whole_wrapper_animate_val_1 = -1*(Math.floor(scrollpos/translatey)*translatey)-(translatey-transition)
							week_whole_wrapper_animate_val_2 = wrapper_translatez
							
						}
					}else if(scrolldirection === 'up' && transition>0){
	   					if(w/h>1/1){
							$('.week_whole_wrapper').css({'transform':'perspective(40vh) rotateX(0deg) translateY( '+ (-1*(Math.floor(scrollpos/translatey)*translatey)-(translatey-transition)) +'vh) translateZ('+wrapper_translatez+'vw)  rotateY('+pos_to_rot(scrollpos+currentrotation)+'deg)'})
							week_whole_wrapper_animate_val_1 = -1*(Math.floor(scrollpos/translatey)*translatey)-(translatey-transition)
							week_whole_wrapper_animate_val_2 = wrapper_translatez
							
						}else{
							$('.week_whole_wrapper').css({'transform':'perspective(41.5vh) scaleY(0.55) scaleX(0.6) rotateX(0deg) translateY( '+ (-1*(Math.floor(scrollpos/translatey)*translatey)-(translatey-transition)) +'vh) translateZ('+wrapper_translatez+'vw)  rotateY('+pos_to_rot(scrollpos+currentrotation)+'deg)'})	
							week_whole_wrapper_animate_val_1 = -1*(Math.floor(scrollpos/translatey)*translatey)-(translatey-transition)
							week_whole_wrapper_animate_val_2 = wrapper_translatez
							
						}
					}else{
	   					if(w/h>1/1){
							$('.week_whole_wrapper').css({'transform':'perspective(40vh) rotateX(0deg) translateY( '+ (-1*(Math.floor(scrollpos/translatey)*translatey)) +'vh) translateZ('+wrapper_translatez+'vw)  rotateY('+pos_to_rot(scrollpos+currentrotation)+'deg)'})
							week_whole_wrapper_animate_val_1 = -1*(Math.floor(scrollpos/translatey)*translatey)
							week_whole_wrapper_animate_val_2 = wrapper_translatez
							
						}else{
							$('.week_whole_wrapper').css({'transform':'perspective(41.5vh) scaleY(0.55) scaleX(0.6) rotateX(0deg) translateY( '+ (-1*(Math.floor(scrollpos/translatey)*translatey)) +'vh) translateZ('+wrapper_translatez+'vw)  rotateY('+pos_to_rot(scrollpos+currentrotation)+'deg)'})	
							week_whole_wrapper_animate_val_1 = -1*(Math.floor(scrollpos/translatey)*translatey)
							week_whole_wrapper_animate_val_2 = wrapper_translatez
							
						}
					}
						var current_rot = (pos_to_rot(scrollpos+currentrotation)+360000)%360
						var current_unit = 360/$('.weekwarpper_current').find('.board').length
						var final_val = Math.floor(current_rot/current_unit)
						if(pre_final_val !==final_val){
							pre_final_val = final_val
							$('.weekwarpper_current .pre_board_sct').removeClass('pre_board_sct')
							$('.weekwarpper_current .board_sct').removeClass('board_sct')
							var pre_val = $('.weekwarpper_current .board_info_time_'+final_val).find('.text_inner_content').attr('class')
							var val = $('.weekwarpper_current .board_info_time_'+final_val).find('.text_inner_content').attr('class').split('text_inner_content_')[1].split(' ')[0]
							if(pre_val.split('sep_img').length>1){
														link = 'image'
													}else{
														link = $('.weekwarpper_current .board_info_time_'+final_val).find('.text_inner_content').attr('class').split('text_inner_content_link_')[1].split(' ')[0]
													}

							$('.weekwarpper_current>.board>.text_inner>.text_inner_wrapper>.text_inner_content_'+val).addClass('pre_board_sct')
							
			            	if(mousepos_y<4/5*h && mousepos_y>1/5*h){
			            		$('.pre_board_sct').addClass('board_sct')
			            	}
						}// $('.weekwarpper_current .board_info_time_'+final_val).addClass('board_sct')
						// $('.weekwarpper_current .board_info_time_'+(final_val-1)).addClass('board_sct')
						// $('.weekwarpper_current .board_info_time_'+(final_val-2)).addClass('board_sct')
						// $('.weekwarpper_current .board_info_time_'+(final_val+1)).addClass('board_sct')
						// $('.weekwarpper_current .board_info_time_'+(final_val+2)).addClass('board_sct')
						// $('.weekwarpper_current .board_info_time_'+Math.floor(current_rot/current_unit)).css({'background-color':'red'})
            	}
				    // if(Math.floor(($('.fake_scroll_wrapper').scrollTop()/(window.innerHeight/100))/translatey*scrollspeed) !== initoffset){
				    // 	initoffset = k
				    // 	show_week()
				    // }
            }
            function switch_view(){
            	//spiral_whole_wrapper_wrapper transform: scale(3);
            	// week_whole_wrapper_wrapper transform: scale(0.25);
            }
            function show_week(){
            	$('.weekwrapper').hide()
            	if(!ismobile){
            	            	$('.weekwrapper_'+(initoffset-3)).show()
            	            	$('.weekwrapper_'+(initoffset-2)).show()
            	            	$('.weekwrapper_'+(initoffset-1)).show()
            	            }
            	$('.weekwrapper_'+(initoffset+0)).show()
            	$('.weekwrapper_'+(initoffset+1)).show()
            	$('.weekwrapper_'+(initoffset+2)).show()
            	$('.weekwrapper_'+(initoffset+3)).show()
            }


            function week_lastpage_swipe(){
            	$('.week_lastpage_arrowl').click(function(){
            		if(week_lastpage==0){week_lastpage = 3}
            		week_lastpage--
            		week_lastpage = week_lastpage%3
            		if(w/h>1/1){
            			if(week_lastpage == 0){$('.week_whole_wrapper').css({'transform':'perspective(40vh) rotateX(0deg) translateY( '+ -1*((week_array.length-1)*translatey) +'vh) translateZ('+wrapper_translatez+'vw)  rotateY('+(pos_to_rot(Math.floor(scrollpos/translatey)*translatey))+'deg)'})}
            			if(week_lastpage == 1){$('.week_whole_wrapper').css({'transform':'perspective(40vh) rotateX(0deg) translateY( '+ -1*((week_array.length-1)*translatey) +'vh) translateZ('+wrapper_translatez+'vw)  rotateY('+(120+pos_to_rot(Math.floor(scrollpos/translatey)*translatey))+'deg)'})}
            			if(week_lastpage == 2){$('.week_whole_wrapper').css({'transform':'perspective(40vh) rotateX(0deg) translateY( '+ -1*((week_array.length-1)*translatey) +'vh) translateZ('+wrapper_translatez+'vw)  rotateY('+(240+pos_to_rot(Math.floor(scrollpos/translatey)*translatey))+'deg)'})}
            		}else{
            			if(week_lastpage == 0){$('.week_whole_wrapper').css({'transform':'perspective(30vh) scale(0.55) rotateX(0deg) translateY( '+ -1*((week_array.length-1)*translatey) +'vh) translateZ('+wrapper_translatez+'vw)  rotateY('+(pos_to_rot(Math.floor(scrollpos/translatey)*translatey))+'deg)'})}
            			if(week_lastpage == 1){$('.week_whole_wrapper').css({'transform':'perspective(30vh) scale(0.55) rotateX(0deg) translateY( '+ -1*((week_array.length-1)*translatey) +'vh) translateZ('+wrapper_translatez+'vw)  rotateY('+(120+pos_to_rot(Math.floor(scrollpos/translatey)*translatey))+'deg)'})}
            			if(week_lastpage == 2){$('.week_whole_wrapper').css({'transform':'perspective(30vh) scale(0.55) rotateX(0deg) translateY( '+ -1*((week_array.length-1)*translatey) +'vh) translateZ('+wrapper_translatez+'vw)  rotateY('+(240+pos_to_rot(Math.floor(scrollpos/translatey)*translatey))+'deg)'})}
            		}
            	})
            	$('.week_lastpage_arrowr').click(function(){
            		week_lastpage++
            		week_lastpage = week_lastpage%3
            		if(w/h>1/1){
            			if(week_lastpage == 0){$('.week_whole_wrapper').css({'transform':'perspective(40vh) rotateX(0deg) translateY( '+ -1*((week_array.length-1)*translatey) +'vh) translateZ('+wrapper_translatez+'vw)  rotateY('+(pos_to_rot(Math.floor(scrollpos/translatey)*translatey))+'deg)'})}
            			if(week_lastpage == 1){$('.week_whole_wrapper').css({'transform':'perspective(40vh) rotateX(0deg) translateY( '+ -1*((week_array.length-1)*translatey) +'vh) translateZ('+wrapper_translatez+'vw)  rotateY('+(120+pos_to_rot(Math.floor(scrollpos/translatey)*translatey))+'deg)'})}
            			if(week_lastpage == 2){$('.week_whole_wrapper').css({'transform':'perspective(40vh) rotateX(0deg) translateY( '+ -1*((week_array.length-1)*translatey) +'vh) translateZ('+wrapper_translatez+'vw)  rotateY('+(240+pos_to_rot(Math.floor(scrollpos/translatey)*translatey))+'deg)'})}
            		}else{
            			if(week_lastpage == 0){$('.week_whole_wrapper').css({'transform':'perspective(30vh) scale(0.55) rotateX(0deg) translateY( '+ -1*((week_array.length-1)*translatey) +'vh) translateZ('+wrapper_translatez+'vw)  rotateY('+(pos_to_rot(Math.floor(scrollpos/translatey)*translatey))+'deg)'})}
            			if(week_lastpage == 1){$('.week_whole_wrapper').css({'transform':'perspective(30vh) scale(0.55) rotateX(0deg) translateY( '+ -1*((week_array.length-1)*translatey) +'vh) translateZ('+wrapper_translatez+'vw)  rotateY('+(120+pos_to_rot(Math.floor(scrollpos/translatey)*translatey))+'deg)'})}
            			if(week_lastpage == 2){$('.week_whole_wrapper').css({'transform':'perspective(30vh) scale(0.55) rotateX(0deg) translateY( '+ -1*((week_array.length-1)*translatey) +'vh) translateZ('+wrapper_translatez+'vw)  rotateY('+(240+pos_to_rot(Math.floor(scrollpos/translatey)*translatey))+'deg)'})}
            		}
            	})
            }

			function map_range(value, low1, high1, low2, high2) {
			    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
			}




            function popup(){
            	// 위에 숫자
            	$('.weekwrapper').each(function(index){
            		$(this).append('<div class="info_popup_wrapper info_popup_wrapper_1" style="transform: translateX(-50%) rotateY('+(360/7 * 0)+'deg) translateZ('+(-1*(translatez-1))+'vw)"><div class="info_popup">'+popup_counter+'</div></div>')
            		$(this).append('<div class="info_popup_wrapper info_popup_wrapper_2" style="transform: translateX(-50%) rotateY('+(360/7 * 1)+'deg) translateZ('+(-1*(translatez-1))+'vw)"><div class="info_popup">'+(popup_counter+6)+'</div></div>')
            		$(this).append('<div class="info_popup_wrapper info_popup_wrapper_3" style="transform: translateX(-50%) rotateY('+(360/7 * 2)+'deg) translateZ('+(-1*(translatez-1))+'vw)"><div class="info_popup">'+(popup_counter+5)+'</div></div>')
            		$(this).append('<div class="info_popup_wrapper info_popup_wrapper_4" style="transform: translateX(-50%) rotateY('+(360/7 * 3)+'deg) translateZ('+(-1*(translatez-1))+'vw)"><div class="info_popup">'+(popup_counter+4)+'</div></div>')
            		$(this).append('<div class="info_popup_wrapper info_popup_wrapper_5" style="transform: translateX(-50%) rotateY('+(360/7 * 4)+'deg) translateZ('+(-1*(translatez-1))+'vw)"><div class="info_popup">'+(popup_counter+3)+'</div></div>')
            		$(this).append('<div class="info_popup_wrapper info_popup_wrapper_6" style="transform: translateX(-50%) rotateY('+(360/7 * 5)+'deg) translateZ('+(-1*(translatez-1))+'vw)"><div class="info_popup">'+(popup_counter+2)+'</div></div>')
            		$(this).append('<div class="info_popup_wrapper info_popup_wrapper_7" style="transform: translateX(-50%) rotateY('+(360/7 * 6)+'deg) translateZ('+(-1*(translatez-1))+'vw)"><div class="info_popup">'+(popup_counter+1)+'</div></div>')
            	popup_counter = popup_counter+7
            		if(index == $('.weekwrapper').length-1){
	            		// $('.next_comingsoon').find('.info_popup_wrapper').each(function(index){
	            		// 	console.log('1')
	            		// 	$(this).find('.info_popup').html('D-'+(index+1))
	            		// })
	            		// $('.comingsoon').find('.info_popup_wrapper').each(function(index){
	            		// 	console.log('2')
	            		// 	$(this).find('.info_popup').html('D-'+(index+8))
	            		// })
	            	}
            	})
	        }
            function hovereffect(){
                //         $('.board').mouseenter(function(){
				            // // $(this).parent().find('.board').css({'background-color':'#dddddd'})
                //         	$(this).parent().find('.info_popup').show()
                //         })
                       
                //         $('.board').mouseleave(function(){
                //         	// $(this).parent().find('.board').css({'background-color':'white'})
                //         	$(this).parent().find('.info_popup').hide()
                //         })
                    
                        $('.spiral').mouseenter(function(){
                        	noscroll = true
                        	var selected = $(this).parent().attr('class').split('spiralwrapper_')[1].split('_')[0]
                        	$('.spiral_whole_wrapper .spiralwrapper_' + selected + '_1 .spiral').css({'border-width':'7px'})
                        	$('.spiral_whole_wrapper .spiralwrapper_' + selected + '_2 .spiral').css({'border-width':'7px'})
                        })
                        
	                    $('.spiral').mouseleave(function(){
                        	noscroll = false
                        	var selected = $(this).parent().attr('class').split('spiralwrapper_')[1].split('_')[0]
                        	$('.spiral_whole_wrapper .spiralwrapper_' + selected + '_1 .spiral').css({'border-width':'1px'})
                        	$('.spiral_whole_wrapper .spiralwrapper_' + selected + '_2 .spiral').css({'border-width':'1px'})
                        	$('.popupbox').html(' ')
	                        })
                    	
                        $('.mark').mouseenter(function(){
                        	noscroll = true
                        	var selected = $(this).attr('class').split('mark_info_')[1].split(' ')[0]
                        	$('.popupbox').html($('.mark_content.mark_info_'+selected+' .markcontent').html())
                        })
                        
	                    $('.mark').mouseleave(function(){
                        	noscroll = false
                        	var selected = $(this).attr('class').split('mark_info_')[1].split(' ')[0]
                        	$('.popupbox').html(' ')
	                    })
                    	
						$('.popups').click(function(){
			    			if(!intervention_on){
			    				var value = parseInt($(this).parent().attr('class').split('rotatey_')[1].split(' ')[0])
								intervention_on = true
			    				$('.week_whole_wrapper').css({'transition':'transform 1s'})
								$('.week_whole_wrapper').css({'transform':'perspective(50vh) rotateX(0deg) translateY( '+ (-1*(Math.floor(scrollpos/translatey)*translatey)) +'vh) translateZ(30vw)  rotateY('+(pos_to_rot(scrollpos+currentrotation))+'deg)'})
			    				$('.weekwarpper_current').find('.rotatey_'+value).css({'transform':'translateX(-50%) rotateY('+value+'deg) translateZ(-4.25vw)'})
								setTimeout(function(){
			    					intervention($('.weekwarpper_current').find('.rotatey_'+value ).find('.popups'),value)
								},1000)
			    			}
			    			removeItemAll(infopopup_array, infopopup_array[i])
						})
            }
            $('.spiral_view_button').click(function(){
            	$('body').removeClass('week_view').addClass('spiral_view')
				window.location.hash = 'spiral';
            })
			$('.week_view_button').click(function(){
				$('body').removeClass('spiral_view').addClass('week_view')
				window.location.hash = 'week';
			})
            $('.spiral_frame').click(function(){
            
				if(window.location.hash && window.location.hash.split('#')[1] === 'week') {
	            		$('body').removeClass('week_view').addClass('spiral_view')
						window.location.hash = 'spiral';
				}
            })
			$('.week_frame').click(function(){
			
				if(window.location.hash && window.location.hash.split('#')[1] === 'spiral') {
						$('body').removeClass('spiral_view').addClass('week_view')
						window.location.hash = 'week';
				}
			})
            $(document).mousemove(function(e){
            	mousepos_x = e.pageX
            	mousepos_y = e.pageY
            	$('.followcursor').css({'left':e.pageX+'px','top':(e.pageY)+'px'})
            	if(mousepos_y<4/5*h && mousepos_y>1/5*h&&mousepos_x<4/5*w && mousepos_x>1/5*w){
            		$('.pre_board_sct').addClass('board_sct')
            	}else{
            		$('.weekwarpper_current .board_sct').removeClass('board_sct')
            	}
            })
		    document.addEventListener('touchstart', function(e) {
            	mousepos_x = e.changedTouches[0].pageX
            	mousepos_y = e.changedTouches[0].pageY
		    }, false);
            $(document).click(function(e){
            	if(ismobile){
	            	if(mousepos_y<4/5*h && mousepos_y>1/5*h&&mousepos_x<4/5*w && mousepos_x>1/5*w){
            			if(!clickblock){
            				if(link==='image'){}else{window.open(link, '_blank').focus();}
            			}
	            	}
	            }else{
	            	mousepos_x = e.pageX
	            	mousepos_y = e.pageY
	            	if(mousepos_y<4/5*h && mousepos_y>1/5*h&&mousepos_x<4/5*w && mousepos_x>1/5*w){
						if(!clickblock){
							if(link==='image'){}else{window.open(link, '_blank').focus();}
						}
	            	}

	            }
            })
            function settingup_lastpage(){
            	$('.weekwrapper_'+(week_array.length-1)+' .board_info_time_0').append('\
            		\
            	')
            	$('.artist_list').click(function(){
	            	$('.lastpage_popupbox').empty()
	            	$('.lastpage_popupbox').append('\
	            		<div class="popups_tab"><div class="close"></div></div>\
						<div class="artist_content_0 artist_content_0_1">\
						“The traveling puppet shows range from tightly composed theater pieces presented by members of the company to extensive outdoor pageants which require the 		participation of many volunteers.”\
						TDR: Why did you name your theatre Bread & Puppet? SCHUMANN: Bread means bread. Something basic. We give it out during or after the show. \
						TDR: Why? \
						SCHUMANN: We would like to be able to feed people.\
						</div>\
						\
					')
					$('.lastpage_popupbox').show()
		            $('.close').click(function(){
		            	$(this).parent().parent().hide()
		            })
            	})







            	$('.weekwrapper_'+(week_array.length-1)+' .board_info_time_2').append('<div class="img_list_wrapper"></div>')



            }

            function analyze_data(data_array){
            	for (var i = 1; i < data_array.length; i++) {
                	for (var j = 2; j < data_array[i].length; j++) {
                		if(parseInt(data_array[i][j]) !== 0){
                			mark_amount++
                			$('.markcontent_wrapper').append('<div class="mark_content mark_info_month_'+data_array[i][0]+'_week_'+data_array[i][1]+'_time_'+j+' mark_'+mark_amount+'"><div class="markcontent">'+data_array[i][j]+'</div></div>')
                			$('.spiral_whole_wrapper').append('<div class="mark mark_info_month_'+data_array[i][0]+'_week_'+data_array[i][1]+'_time_'+j+' mark_'+mark_amount+'"></div>')
                			if(j-2<12){
                				$('.spiral_whole_wrapper .mark_'+mark_amount).css({'transform':'translateY('+spiral_unit/-2+'px) rotate('+ ((j-2)/24 * 360) + 'deg) translateY('+(-1*$('.spiral_wrapper_'+(i)+'_2').outerWidth()/2+spiral_unit/-2) +'px'})
                			}else{
                				$('.spiral_whole_wrapper .mark_'+mark_amount).css({'transform':'rotate('+((j-2)/24 * 360) + 'deg) translateY('+(-1*($('.spiral_wrapper_'+(i)+'_1').outerWidth()/2)+spiral_unit/-2) +'px)'})
                			}
                		}
                	}
            	}
            }
})