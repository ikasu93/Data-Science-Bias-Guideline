# Data-Science-Bias-Guideline

## Data Ingestion Phase
### Data Bias (Representation Bias)
“A systematic distortion in the data that compromises its representativeness.” It is directly related to sampling that confirms whether the sample is representative of the larger population or not. It occurs during the data accumulation phase. Although capturing bias-free dataset is not feasible, data scientists can estimate the biasness in the data by comparing the sample with multiple samples having different contexts [1].
#### Example: 
In [2], the writers claimed that machine learning algorithms discriminate against people on race, gender and ethnicity. They represent that the databanks of Adience and IJB-A primarily hold light-skinned subjects — 86.2 percent and 79.6% respectively, which can bias towards the underrepresented dark skin groups. 
#### Best Practices: 
In [3], novel data Representation bias Removal (REPAIR) technique is introduced to resolve the generalization issues present in training datasets by employing Repair-Algorithm. Proper labeling of the data just like the nutrition chart is another way to reduce data bias by task-oriented categorization of data [4]. Using supporting sheets for datasets can be valuable while lessening the data bias. Advanced data mining and proper data targeting are some other options for data recruiters to hire in order to obtain less discriminated data [5].

### Selection Bias
Selection bias occurs when ‘wrong’ contributors are selected/allowed to contribute, and therefore, the proper randomization is not achieved. 
#### Example:
If the residents of rural areas were selected to participate in a city transportation network related project. Due to the nature of VGI projects selection bias is one of the most important and influencing types of biases and also relatively hard to detect and treat [6].
#### Best Practices: 
To correct this bias, it is especially important to ensure that selection bias is avoided when recruiting and retaining the sample population. Picking up subgroups randomly can also be beneficial to limit selection bias [7]. 
 
### Sampling Bias
Sampling bias is closely related to selection bias that can occur when all the members of data are not objectively representative of the target population about which conclusions are to be drawn. In addition, errors in the process of collecting samples generate sampling bias while errors in the subsequent processes cause selection bias [8]. Non-representative samples often lead to models that exhibit systematic errors. In biased sampling, the whole dataset is divided into two groups namely minority and majority groups. Hence the model may be trained according to the dominating and prejudicial behavior of the assessments. Therefore, proper selection of training data is the crucial part for data scientists as it is extremely challenging for them to compute the ground reality [9]. 
#### Example 1: 
Tainted training examples might wrongly instruct the machine to see features that actually predict success on the job as indicators of poor performance.
#### Example 2: 
A classic example of a biased sample happens in politics, such as the famous 1936 opinion polling for the U.S. presidential elections carried out by the American Literary Digest magazine, which over-represented rich individuals and predicted the wrong outcome [10].
#### Best Practices: 
If some groups are known to be under-represented and the degree of under-representation can be quantified, then sample weights can correct the bias [11]. Simple random sampling, and Stratified random sampling are some valuable tricks to mitigate sampling bias [12]. Stratification involves the division of the whole population into different subgroups, for instance, measuring the similar attributes of multiple subgroups under same conditions. Hence, this approach offers in-depth inspection of the relations among the groups and highly précised scores as variability is low in homogenous groups [13].  

### Measurement Bias (Systematic Errors)
Measurement bias arises when the data analyst tries to get desired results by selecting, operating, and measuring a particular feature [14]. This may cause us to skip some important factors or create group or noise in the process that would lead to disaster. It relates with the data bias to some extent but the main difference is that data bias is due to inherent bias in the data that gives biased outcome due to non-standardize data while, on the other hand, includes the addition of unnecessary data unconsciously or deliberately.
#### Example: 
Measurement bias was spotted in the risk prediction tool COMPAS, in which the former arrests and family arrests were employed as proxy variables to measure level of “crime”. COMPAS predicted incorrectly based on dissimilar subgroups. As marginal groups are controlled and policed more often, thus they have a higher rate of arrests [15]. 
#### Best Practices: 
Systematic errors cannot be avoided simply by collecting more data, but having multiple measuring devices (or observers of instruments), and data specialists to compare the output of these devices [11].

### Survey Bias (Self-Reporting Bias)
As per the name, survey bias occurs when researchers receive prejudiced, inconsistent and tailored feedback or no feedback to the interviews, surveys and questionnaires from the respondents. The main behind all that is the presence of secret or sensitive topics of discussions concerning income, sex, drugs, race, violence etc. Consequently, self-reporting data can be influenced by two types of external bias: (1) Social approval (that can underestimate the original value); and (2) Recall Bias (mostly people recall and answer that might be erroneous) [11]. The concept of data linkage is very important to understand for the data analysts here. Data linkage involves in the data collection process when information about the same entity is gathered from two or more distinct sources. Probabilistic matching and Individual reference identifiers can be useful while joining two or more survey datasets [16].
#### Example 1: 
Survey can be biased by extreme behavior of the respondents. When they are asked to rate 1 to 5, such as star ratings or even a selection of statements (such as satisfied, mostly satisfied, somewhat dissatisfied, and dissatisfied). What would happen when most of the answers tend to be either 1 or 5, 1 star or 5 stars, satisfied or dissatisfied, a response bias will appear [17].
#### Example 2: 
If there is personal question included in the survey regarding sex or drugs, then it’s probable that a majority of respondents may leave the questionnaire unanswered. In this case, non-response bias will occur. 
#### Best Practices: 
To avoid such biases, balanced questionnaires should be designed. Try to avoid the queries (political, religious) that emotionally charge the participants. One should design the questions by understanding the demographics as well. Allow people to say “No” [17]. 

### Seasonal Bias
Sometimes the available data is related to seasonal entities which simply means that the dataset exhibits seasonal growth patterns. Data interpreters when considering this kind of situational data (Time Series) for training the supervised models, they are said to be seasonally biased. Additionally, predictive models are gravely impacted by seasonality because of the dynamic fluctuations present in the records. 
#### Example: 
The Indian financial year ends on 31st March. It is a high time for Indian insurance industry because people tend to buy more insurance items to claim the rebates at that time. An analysis of past 10 years of insurance business data shows that 25-30% of business of insurance industry in India come in the month of March. Similarly, there is a surge in sales of consumer goods in the UK and US leading up to Christmas [18]. Data analyzers have to keep track of trends that data has been facing since previous years to get optimized results from their models.
#### Best Practices: 
Having in-depth knowledge about the seasonal trends of the targeted industry is essential to avoid seasonal bias. Targeted industry is used as a generalized term, that includes the industry under examination, regardless of which industry it is (examples are given above). Data specialists can compare the values of peak time with normal day value and they should measure only what they need. Reviewing the historical trend to predict future patterns can also be the good approach for seasonal adjustments [19]. 

### Survivorship Bias
Survivorship bias occurs when only certain successful subsets of a group are considered while the failures are dropped out of observation. This type of dataset selection skews the average output upward showing fake performance [20]. Data scientists when they try to make sense out of incomplete data, they fell prey to the survivorship bias. 
#### Example: 
During World War II, researchers from the non-profit research group the Center for Naval Analyses were tasked with a problem. They needed to reinforce the military’s fighter planes at their weakest spots. To accomplish this, they turned to data. They examined every plane that came back from a combat mission and made note of where bullets had hit the aircraft. Based on that information, they recommended that the planes be reinforced at those precise spots. The problem, of course, was that they only looked at the planes that returned and not at the planes that didn’t. Of course, data from the planes that had been shot down would almost certainly have been much more useful in determining where fatal damage to a plane was likely to have occurred, as those were the ones that suffered catastrophic damage [21].
#### Best Practices: 
Data scientists may alleviate survivorship bias in backtest with survivorship bias free datasets and/or more recent data. The former one includes information of delisted equities during the test period while it is likely that fewer stocks are delisting in a more recent, shorter time period [22].

### Historical Bias
The pre-existing bias arises due to social and technical disagreements in the world as it is; and it seeps into the data even after selecting features and collecting samples perfectly [15]. 
#### Example: 
In 2018, an image search for women CEOs showed fewer results as there were only 5% women in Fortune 500 CEOs. Even the output was the entire reality, algorithms should consider or avoid these inherent discrimination is the hot topic for data scientists [15]. 
#### Best Practices: 
Recognizing historical bias requires a retrospective understanding of the application and data generation process over time. Historical bias is often concerned with demonstrating the representational harms (such as reinforcing a stereotype) against a distinct group [15].


