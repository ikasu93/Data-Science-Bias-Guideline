# Data-Science-Bias-Guideline

## Data Ingestion Phase
### Data Bias (Representation Bias)
“A systematic distortion in the data that compromises its representativeness.” It is directly related to sampling that confirms whether the sample is representative of the larger population or not. It occurs during the data accumulation phase. Although capturing bias-free dataset is not feasible, data scientists can estimate the biasness in the data by comparing the sample with multiple samples having different contexts [1].
* **Example:**
In [2], the writers claimed that machine learning algorithms discriminate against people on race, gender and ethnicity. They represent that the databanks of Adience and IJB-A primarily hold light-skinned subjects — 86.2 percent and 79.6% respectively, which can bias towards the underrepresented dark skin groups. 
* **Best Practices:**
In [3], novel data Representation bias Removal (REPAIR) technique is introduced to resolve the generalization issues present in training datasets by employing Repair-Algorithm. Proper labeling of the data just like the nutrition chart is another way to reduce data bias by task-oriented categorization of data [4]. Using supporting sheets for datasets can be valuable while lessening the data bias. Advanced data mining and proper data targeting are some other options for data recruiters to hire in order to obtain less discriminated data [5].

### Selection Bias
Selection bias occurs when ‘wrong’ contributors are selected/allowed to contribute, and therefore, the proper randomization is not achieved. 
* **Example:**
If the residents of rural areas were selected to participate in a city transportation network related project. Due to the nature of VGI projects selection bias is one of the most important and influencing types of biases and also relatively hard to detect and treat [6].
* **Best Practices:**
To correct this bias, it is especially important to ensure that selection bias is avoided when recruiting and retaining the sample population. Picking up subgroups randomly can also be beneficial to limit selection bias [7]. 
 
### Sampling Bias
Sampling bias is closely related to selection bias that can occur when all the members of data are not objectively representative of the target population about which conclusions are to be drawn. In addition, errors in the process of collecting samples generate sampling bias while errors in the subsequent processes cause selection bias [8]. Non-representative samples often lead to models that exhibit systematic errors. In biased sampling, the whole dataset is divided into two groups namely minority and majority groups. Hence the model may be trained according to the dominating and prejudicial behavior of the assessments. Therefore, proper selection of training data is the crucial part for data scientists as it is extremely challenging for them to compute the ground reality [9]. 
* **Example 1:** 
Tainted training examples might wrongly instruct the machine to see features that actually predict success on the job as indicators of poor performance.
* **Example 2:** 
A classic example of a biased sample happens in politics, such as the famous 1936 opinion polling for the U.S. presidential elections carried out by the American Literary Digest magazine, which over-represented rich individuals and predicted the wrong outcome [10].
* **Best Practices:** 
If some groups are known to be under-represented and the degree of under-representation can be quantified, then sample weights can correct the bias [11]. Simple random sampling, and Stratified random sampling are some valuable tricks to mitigate sampling bias [12]. Stratification involves the division of the whole population into different subgroups, for instance, measuring the similar attributes of multiple subgroups under same conditions. Hence, this approach offers in-depth inspection of the relations among the groups and highly précised scores as variability is low in homogenous groups [13].  

### Measurement Bias (Systematic Errors)
Measurement bias arises when the data analyst tries to get desired results by selecting, operating, and measuring a particular feature [14]. This may cause us to skip some important factors or create group or noise in the process that would lead to disaster. It relates with the data bias to some extent but the main difference is that data bias is due to inherent bias in the data that gives biased outcome due to non-standardize data while, on the other hand, includes the addition of unnecessary data unconsciously or deliberately.
* **Example:** 
Measurement bias was spotted in the risk prediction tool COMPAS, in which the former arrests and family arrests were employed as proxy variables to measure level of “crime”. COMPAS predicted incorrectly based on dissimilar subgroups. As marginal groups are controlled and policed more often, thus they have a higher rate of arrests [15]. 
* **Best Practices:** 
Systematic errors cannot be avoided simply by collecting more data, but having multiple measuring devices (or observers of instruments), and data specialists to compare the output of these devices [11].

### Survey Bias (Self-Reporting Bias)
As per the name, survey bias occurs when researchers receive prejudiced, inconsistent and tailored feedback or no feedback to the interviews, surveys and questionnaires from the respondents. The main behind all that is the presence of secret or sensitive topics of discussions concerning income, sex, drugs, race, violence etc. Consequently, self-reporting data can be influenced by two types of external bias: (1) Social approval (that can underestimate the original value); and (2) Recall Bias (mostly people recall and answer that might be erroneous) [11]. The concept of data linkage is very important to understand for the data analysts here. Data linkage involves in the data collection process when information about the same entity is gathered from two or more distinct sources. Probabilistic matching and Individual reference identifiers can be useful while joining two or more survey datasets [16].
* **Example 1:** 
Survey can be biased by extreme behavior of the respondents. When they are asked to rate 1 to 5, such as star ratings or even a selection of statements (such as satisfied, mostly satisfied, somewhat dissatisfied, and dissatisfied). What would happen when most of the answers tend to be either 1 or 5, 1 star or 5 stars, satisfied or dissatisfied, a response bias will appear [17].
* **Example 2:** 
If there is personal question included in the survey regarding sex or drugs, then it’s probable that a majority of respondents may leave the questionnaire unanswered. In this case, non-response bias will occur. 
* **Best Practices:** 
To avoid such biases, balanced questionnaires should be designed. Try to avoid the queries (political, religious) that emotionally charge the participants. One should design the questions by understanding the demographics as well. Allow people to say “No” [17]. 

### Seasonal Bias
Sometimes the available data is related to seasonal entities which simply means that the dataset exhibits seasonal growth patterns. Data interpreters when considering this kind of situational data (Time Series) for training the supervised models, they are said to be seasonally biased. Additionally, predictive models are gravely impacted by seasonality because of the dynamic fluctuations present in the records. 
* **Example:** 
The Indian financial year ends on 31st March. It is a high time for Indian insurance industry because people tend to buy more insurance items to claim the rebates at that time. An analysis of past 10 years of insurance business data shows that 25-30% of business of insurance industry in India come in the month of March. Similarly, there is a surge in sales of consumer goods in the UK and US leading up to Christmas [18]. Data analyzers have to keep track of trends that data has been facing since previous years to get optimized results from their models.
* **Best Practices:** 
Having in-depth knowledge about the seasonal trends of the targeted industry is essential to avoid seasonal bias. Targeted industry is used as a generalized term, that includes the industry under examination, regardless of which industry it is (examples are given above). Data specialists can compare the values of peak time with normal day value and they should measure only what they need. Reviewing the historical trend to predict future patterns can also be the good approach for seasonal adjustments [19]. 

### Survivorship Bias
Survivorship bias occurs when only certain successful subsets of a group are considered while the failures are dropped out of observation. This type of dataset selection skews the average output upward showing fake performance [20]. Data scientists when they try to make sense out of incomplete data, they fell prey to the survivorship bias. 
* **Example:** 
During World War II, researchers from the non-profit research group the Center for Naval Analyses were tasked with a problem. They needed to reinforce the military’s fighter planes at their weakest spots. To accomplish this, they turned to data. They examined every plane that came back from a combat mission and made note of where bullets had hit the aircraft. Based on that information, they recommended that the planes be reinforced at those precise spots. The problem, of course, was that they only looked at the planes that returned and not at the planes that didn’t. Of course, data from the planes that had been shot down would almost certainly have been much more useful in determining where fatal damage to a plane was likely to have occurred, as those were the ones that suffered catastrophic damage [21].
* **Best Practices:** 
Data scientists may alleviate survivorship bias in backtest with survivorship bias free datasets and/or more recent data. The former one includes information of delisted equities during the test period while it is likely that fewer stocks are delisting in a more recent, shorter time period [22].

### Historical Bias
The pre-existing bias arises due to social and technical disagreements in the world as it is; and it seeps into the data even after selecting features and collecting samples perfectly [15]. 
* **Example:** 
In 2018, an image search for women CEOs showed fewer results as there were only 5% women in Fortune 500 CEOs. Even the output was the entire reality, algorithms should consider or avoid these inherent discrimination is the hot topic for data scientists [15]. 
* **Best Practices:** 
Recognizing historical bias requires a retrospective understanding of the application and data generation process over time. Historical bias is often concerned with demonstrating the representational harms (such as reinforcing a stereotype) against a distinct group [15].


## Data Scrubbing Phase

#### Exclusion Bias
Data cleansing is an essential phase of the data science lifecycle that comes after data collection. In ethical perspective, removal of corrupt or unethical data involving both upper and lower extremes and exceptions is crucially important. For instance, outliers (values that deviate from the pattern) and duplications, from big raw data to make it less redundant, more consistent and reliable for model training. Since excluding un-actionable and duplicate insights is an important part while cleaning noise from the data, experts get biased while they get into it. Exclusion bias occurs when data handlers do not identify and remove the undesired chunks of data that should be removed in order to make data ethical and to maintain the accuracy of the results [23].
* **Example 1:**
We do customer profiling and find out that the average annual income of customers is $0.8 million. But, there are two customers having annual income of $4 and $4.2 million. These two observations will be seen as Outliers. Exclusion bias will occur if data managers do not exclude these two customers as their annual income is much higher than the rest of the population [24]. Exclusion bias can also arise when some important chunk is deleted from the data source while refining the data.
* **Example 2:**
Exclusion of subjects who have recently migrated into the study area (this may occur when newcomers are not available in a register used to identify the source population). Excluding subjects who move out of the study area during follow-up is rather equivalent to dropout or non-response, a selection bias in that it rather affects the internal validity of the study [25]. 
* **Best Practices:**
To avoid this bias, file manipulators and data scientists should have intimate knowledge of data attributes, database sources as well as the data collection process in order to verify what to exclude or not (ethical exclusion). Secondly, extreme values from the data can be precisely detected through various techniques including k-Nearest Neighbor technique, ARIMA methodology, Regression analysis [26] or an Angel-based Outlier Detection [27]. 

#### Data Enrichment Bias
After excluding outliers, data should be structured properly via managing the abnormal segments and missing segments. Organizing the available data means eliminating typos or grammatical mistakes from the data, and handling the missing data that is because of incomplete responses from the participants (Non-response bias). Data enrichment bias occurs due to typing mistakes of data entry operators or when they misinterpret the context of data and add the wrong input (extreme input) to fulfill empty fields [28]. Data cleaning though is the time consuming task but it can ultimately improve the decision making process.
* **Example:**
Imagine a data entry operator mistakenly type “Hspital” instead of “Hospital” or evaluates the student pass having less than 50% marks while others are fail in the list having same percentage.
* **Best Practices:**
The serendipitous search in AI algorithms has enough potential to mitigate data-enrichment bias by exploring the unexplored parts through different ranking parameters [29]. A quality assurance committee having diverse experience of several disciplines should be formalized to review the data sources repetitively from the lens of morality to ensure fairness and reduce data discrimination [29]. Using techniques like Kernel-based local outlier factor (LOF) to identify the incorrect data can be helpful [28]. Furthermore, data dealers can create a separate category for records having missing values or flag them with “0” (if numeric) to make the algorithm aware of it [30].
You can find an additional example at https://theconversation.com/data-ethics-is-more-than-just-what-we-do-with-data-its-also-about-whos-doing-it-98010.

## Data Visualization Phase
### Cognitive Biases
A picture speaks louder than words. Studies have shown that visual transformations of data actually affect the data that impacts both decision making and the results. Tools that present data into the visual formats always try to make visualization easy for the auditors and by doing so, they may alter the original pattern of data [31]. Such improperly created graphs can trigger cognitive biases for the viewers [32]. Five types of cognitive biases are discussed in [33].

#### 1.	Data Visualization and Framing Effect: 
Individuals respond to a particular problem in different ways depending upon how the problem is framed to them, a bias is called framing effect [34]. Data visualization tools often prioritize the data in the most comprehensible way. Meanwhile, they mostly alter the original sequence of data and trigger the framing bias for the auditor to cope with.   
* **Example:** 
Graph highlights that 30 percent (70 percent) of a client’s usual trade credits from suppliers are denied (awarded) might impact auditors’ assessment of the probability and severity of their audit client’s financial difficulties, which is one of the key conditions of an entity’s ability to continue as a going concern (AU 341.06 An Entity’s Ability to Continue as Going Concern, Consideration of Conditions and Events). Due to the framing effect, auditors who receive or process the negatively framed information (credit denial) are more likely to have substantial doubt about the client’s ability to continue as a going concern. Therefore, improperly designed visualizations can trigger and/or aggravate framing effects [33].
* **Best Practices:**
Data analysts should use visualization tools strategically, let say, use an effective tool at the early stage of lifecycle [35].
 
#### 2.	Data Visualization and Availability Bias: 
Availability bias relates to the survivorship bias expressing the tendency to use the already available information and consider such information more relevant than evidence that is hard to attain. Data visualization directly enhances the vividness and evaluability of data that influence availability bias but on the other hand, it compromises the overall quality of making effective decisions [31].
* **Example:**
After reading an article about lottery winners, you start to overestimate your own likelihood of winning the jackpot. You start spending more money than you should each week on lottery tickets [36], [37].
* **Best Practice:**
People should spend proper time and effort contemplating other options, to properly weight them in terms of how well they meet the objective, or to consider the reliability, validity, certainty and accuracy of information [38].

#### 3.	Data visualization and Overconfidence Bias: 
Overconfidence bias refers to an analyst’s tendency to “overestimate their own ability to perform tasks or to make accurate diagnoses or other judgments and decisions” [39]. Generally, the decision makers feel more confident in the graphical visualization of the data as compared to the textual format. Overconfidence leads to less cautious behavior that can be dangerous while making sensitive decisions.
* **Example:** 
In a survey conducted of 300 fund managers, asking if they believe in their managerial abilities with options average, above average and below average. Figures show that 74% believed that they were above average and of the remaining 26% thought they were average. While no one thought that he/she was below average. So, it’s clear that these findings are statistically impossible or manipulated which is not suitable for data modeling [40]. 
* **Best Practice:**
Overconfidence can lead to overestimation and over-precision that is intolerable in statistical analysis. Therefore, one can channelize his/her overconfidence by creating scientific a mindset, by challenging his viewpoints, by listening to the criticism and by constant learning attitude [41].

#### 4.	Data visualization and Anchoring Bias: 
Anchoring bias refers to the situation in which individuals rely too much on the initial piece of information offered and make future decisions by using this information. While visualizing data, anchoring bias may disturb the future interpretations and evaluations of insights coming from the same data based on preliminary evidence [33]. 
* **Example:**
Ecommerce stores take benefits by using anchoring techniques by showing costly things first. Seeing $500 shirts first and $60 shirts at the second place, one will be prone to see the second shirt cheap.
* **Best Practice:**
Critical thinking can be beneficial in avoiding it. One can study his/her own anchoring behavior and analyze its prospects. Making future decisions based on historical patterns can also limit anchoring bias. Asking your  colleague for the review is not a bad choice [42].

#### 5.	Data Visualization, Confirmation Bias and Signal Error: 
One can be the victim of both confirmation bias and signal error when there is a huge amount of data in hand. Signal error occurs when data analysts just overlook the major gaps between the data that make it inconsistent or unreliable. On the other hand, confirmation bias is the situation in which model builders unconsciously process the subset of data visualization that confirm their prior feelings and viewpoints [43] [33] . In addition, a trainer may actually keep training a model until it produces a result that aligns with their original hypothesis; this is called experimenter's bias. All of these biases can impede while making decisions.
* **Example:**
Peter O. Gray [44] in his book presents an example of confirmation bias in the doctor’s diagnosis. He explained that a doctor forecasts the disease after asking some queries from the patient and looks for the evidence that tends to confirm his/her diagnosis while overseeing the sign that inclines to defeat his analysis. Same is the case with data scientists who mostly tend to ignore the data that contradicts their hypothesis that ultimately have negative impacts on the process. Therefore, a data scientist should know all his biases and think scientifically to avoid such blunders.
* **Best Practices:**
Confirmation Bias can be countered by continuously challenging your thoughts, by finding alternative sources of information and testing it [45]. 

## Data Modeling Phase

### Algorithmic Bias
Studies have shown the probability of unfairness in data is much greater than that of algorithms. More precisely, datasets are previously discriminated before passing through the algorithms that exhibit biased decisional pictures [46]. Machine learning algorithms based on AI, are commonly used while training the models in a supervised learning framework. Fairness is an increasingly important concern as autonomous models are used to support decision making in high-stakes applications such as mortgage lending, hiring, and prison sentencing [47]. To understand the responsibility of model failure, understanding the accountability matrix for algorithms is essential. Algorithmic bias is when an algorithm does not neutrally extract or transform the data. Scholars are trying hard to figure out the ways of mitigating the algorithmic biases present in Google searches, Facebook feeds, or in YouTube recommendations [48].
* **Example:**
Online retailer Amazon, whose global workforce is 60 percent male and where men hold 74 percent of the company’s managerial positions, recently discontinued use of a recruiting algorithm after discovering gender bias. The data that engineers used to create the algorithm were derived from the resumes submitted to Amazon over a 10-year period, which were predominantly from white males. The algorithm was taught to recognize word patterns in the resumes, rather than relevant skill sets, and these data were benchmarked against the company’s predominantly male engineering department to determine an applicant’s fit. As a result, the AI software penalized any resume that contained the word “women’s” in the text and downgraded the resumes of women who attended women’s colleges, resulting in gender bias [49].
* **Sources of Algorithmic Bias**[48]:
1. Biased Training data can be the source of algorithmic bias.
2.	Algorithms can be biased via differential use of information (using morally irrelevant categories to make morally relevant and sensitive judgements).
3.	During the data processing, the algorithm can itself be biased, called Algorithm Processing Bias. The most obvious instance of algorithmic processing bias is the use of a statistically biased estimator in the algorithm for better future predictions. So, this bias mostly occurs due to deliberate choice.  
4.	Algorithmic Bias can also occur when the specific model is employed outside of its context, commonly known as Transfer Context Bias. For instance, using an autonomous system worldwide that was designed to be used in US. It’s basically the User Bias but labelled as the “algorithmic bias”. 
5.	Sometimes the information that an algorithm produces mismatch with the information that user expects, is known as Interpretation Bias. In the manual systems, misjudging the results of algorithms is actually the user bias but also notorious as “algorithmic bias”. In autonomous systems, biased judgments about causal structure or strength (i.e., that deviate from the actual causal structure in the world) can easily be misused in biased ways by autonomous systems. 
6.	Algorithmic bias can occur when algorithms make decisions based on race, usually called Racial Bias. It may be due to the unintentional or open inclusion of racial characteristics by the developer in the databank or may be due to historical bias in data. Advanced healthcare systems rely on commercial prediction algorithms to identify and help patients with complex health needs, therefore, there are high risks attached with the biased predictions. A clear example of racial disparity is that Black patients are considerably sicker than White patients, as evidenced by signs of uncontrolled illnesses [50].
* **Best Practices:** 
**AIF360** is the first system to bring together in one open source toolkit: bias metrics, bias mitigation algorithms, bias metric explanations, and industrial usability. By integrating these aspects, AIF360 can enable stronger collaboration between AI fairness researchers and practitioners, helping to translate our collective research results to practicing data scientists, data engineers, and developers deploying solutions in a variety of industries [47].
The fairness metrics and the algorithms the tool is using is shown at https://aif360.readthedocs.io/en/latest/modules/algorithms.html and https://aif360.readthedocs.io/en/latest/modules/metrics.html.
**FAIRECSYS** — an algorithm that mitigates algorithmic bias by post-processing the recommendation matrix with minimum impact on the utility of recommendations provided to the end-users [62]. By giving people control of their digital footprints can be helpful to reduce data bias. Algorithm transparency is another way to address the issue of algorithmic bias. Policy makers should design and implement discrimination-free laws to counter the lag in proper decision making that is, due to racial bias [63].

### Hot Hand Fallacy
In the data science lifecycle, this bias appears when data experts use a particular model repeatedly for all the problems based on its historical performance without testing other suitable models. In this phenomenon, a person who got best results recently is supposed to have greater chances of success in future [64]. 
* **Example:**
When we throw a coin 20 times, then there is a 50 percent chance of getting four heads in a row, a 25 percent chance of five in a row and a 10 percent chance of a run of six. However, if you give this sequence to most individuals they will consider that these were patterns in the data and not at all random. This explains the “hot hand” fallacy in which we think we are on a winning streak – in whatever that may be – from cards to basketball to football. In each of these areas where the data is random but happens to include a sequence, we massively over-interpret the importance of this pattern [65].
* **Best Practices:**
Data scientists should think systematically and treat each problem independently as per its requirements. If we again examine the coin toss example, just because you threw tails three times and won, it doesn’t mean the fourth toss will also result in a win. Therefore, one should segregate each problem and try to make logical conclusions for the choices [66].  

### Bandwagon Effect
The bandwagon effect is the type of cognitive bias that refers to the individual tendency
to follow the behavior of the mass [67]. In model building, this effect appears when we are derived by the impulse to adopt a specific methodology just because it previously been adopted by others. Hence, the data scientists blindly select the model without any evaluation as human brains love shortcuts.
* **Example:**
Tonsillectomy is cited as a recent example of medical bandwagons. Although the practice is said to be beneficial in some specific cases, scientific support for the universal use it saw was lacking. Doctors were drawn to tonsillectomy not on the basis of its effectiveness, but because they saw it was widely used [68].
* **Best Practices:**
Despite Bandwagon effect can help to adopt healthy behavior, data analysts should think twice before jumping into it. One must re-think either he/she is rational or influenced by the environment/group while making influential judgements. One must evaluate the algorithms before rushing towards them without knowing about constraints [69].  

### Group Attribution Bias
It is to believe that a person's traits always follow the ideologies of a group to which he/she belong and the decisions of the group manifest the beliefs it’s every member [70]. This bias consist of two categories:
#### In-group bias: 
A preference for members of a group to which you also belong, or for characteristics that you also share.
* **Example:**
Two engineers training a résumé-screening model for software developers are predisposed to believe that applicants who attended the same computer-science academy as they both did are more qualified for the role [70].
#### Out-group homogeneity bias: 
A tendency to stereotype individual members of a group to which you do not belong, or to see their characteristics as more uniform.
* **Example:**
Two engineers training a résumé-screening model for software developers are predisposed to believe that all applicants who did not attend a computer-science academy do not have sufficient expertise for the role [70].
* **Best Practices:**
In order to avoid group attribution biases, data scientists should not behave judgmentally rather they should analyze the situation and efficiently respond to the situation. Emotional and Cultural intelligence is another skill that can be handy in mitigating fundamental attribution errors while scheming a model. Self-analysis is one of the versatile techniques to avoid severe favoritism [71]. 

### Aggregation Bias
Aggregation bias occurs while model creation, when one framework is used for the groups having distinct conditional distributions, P(Y/X). In many applications, the concerned population is heterogeneous, and a single model does not fit all the subgroups. Aggregation bias can lead to a model that is suitable for the dominant population, or a model that does not fit any group at all (if combined with representation bias) [15].
* **Example:** 
Diabetes patients have known differences in associated complications across ethnicities [72]. Studies have also suggested that HbA1c levels (widely used to diagnose and monitor diabetes) differ in complex ways across ethnicities and genders [73]. Because these factors have different meanings and importance within different subpopulations, a single model to predict complications is unlikely to be best-suited for any group in the population even if they are equally represented in the training data [15].
* **Best Practices:**
Coupled learning techniques, for instance, multitask learning and Fair representation learning approach such that, space projection of data can be useful while countering aggregation bias [74], [75].

### Evaluation Bias
Evaluation bias happens during model iteration and evaluation when the training or benchmark data do not represent the targeted population. Evaluation bias can also arise from the use of performance metrics that are not appropriate for the way in which the model will be used. This can be intensified by the use of inappropriate metrics that are arrayed to report performance boost [15].
* **Example:**
Just recall the example 1 that is discussed in data Bias in the context of facial detection setup in which Buolamwini and Gebru [2] point out the drastically worse performance of commercially-used facial analysis algorithms. Looking at some common facial analysis benchmark datasets, it becomes apparent why such algorithms were considered appropriate for use – just 7.4% and 4.4% of the images in benchmark datasets such as Adience and IJB-A are of dark-skinned female faces. Algorithms that underperform on this slice of the population therefore suffer quite little in their evaluation performance on these benchmarks. The algorithms’ underperformance was likely caused by representation bias in the training data, but the benchmarks failed to discover and penalize this. Since this study, other algorithms have been benchmarked on more balanced face datasets, changing the development process to encourage models that perform well across groups [76].
* **Best Practices:**
To mitigate evaluation bias an approach namely Subgroup Evaluation can be used to comprehend the group matrices clearly by comparing them. Multiple metrics and confidence intervals is another useful technique in choosing relevant metrics for modeling [2], [76]. Targeted data augmentation (e.g., SMOTE) is also used to populate parts of the data distribution that are underrepresented [77].

