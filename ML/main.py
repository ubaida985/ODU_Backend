import csv
import joblib
import pandas as pd
def find(bmi,stroke,alcohol,smoke,physical,mental,walk,sex,age,dia,activity,gen,sleep,asthma,kidney,skin):  
    attributes =[[bmi,stroke,alcohol,smoke,physical,mental,walk,sex,age,dia,activity,gen,sleep,asthma,kidney,skin]]
    df = pd.DataFrame(attributes, columns = ['BMI', 'Smoking', 'AlcoholDrinking', 'Stroke', 'PhysicalHealth',
                                            'MentalHealth', 'DiffWalking', 'Sex', 'AgeCategory', 'Diabetic',
                                            'PhysicalActivity', 'GenHealth', 'SleepTime', 'Asthma', 'KidneyDisease',
                                            'SkinCancer'])
    model=joblib.load('./ML/Models/CVD_CDC_LR')
    SS = joblib.load('./ML/Models/scaler')
    scaled_attributes=SS.transform(df)
    ans=model.predict(scaled_attributes)
    if(ans[0]==0):
        return "False"
    if(ans[0]==1):
        return "True"

    