import pandas as pd
from random import *
import string

df = pd.read_csv("Alumni Connect Members Dataset.csv")
for i in df.index:
    
    mobile_number = randint(6666666666, 9999999999)
    df.loc[i, "mobile_number"] = str(mobile_number)
    
    alternate_mobile_number = randint(6666666666, 9999999999)
    df.loc[i, "alternate_mobile_number"] = str(alternate_mobile_number)
    
    import random as random
    primary_email_id = ''.join(random.choices(string.ascii_lowercase + string.digits, k=10))
    df.loc[i, "primary_email_id"] = str(primary_email_id + "@gmail.com")
    
    alternate_email_id = ''.join(random.choices(string.ascii_lowercase + string.digits, k=10))
    df.loc[i, "alternate_email_id"] = str(alternate_email_id + "@outlook.com")
    
    day = randint(1, 28)
    month = randint(1, 12)
    year = randint(1962, 2022)
    df.loc[i, "birthday"] = str(str(day) + "/" + str(month) + "/" + str(year))
    
    tagline = ''.join(random.choices(string.ascii_lowercase + string.ascii_uppercase, k=25))
    df.loc[i, "tagline"] = str(tagline)
    
    hastags = ''.join(random.choices(string.ascii_lowercase + string.ascii_uppercase, k=7))
    df.loc[i, "hastags"] = str("#" + hastags)
    
    tagline = ''.join(random.choices(string.ascii_lowercase + string.ascii_uppercase, k=25))
    df.loc[i, "tagline"] = str(tagline)
    
    about = ''.join(random.choices(string.ascii_lowercase + string.ascii_uppercase, k=250))
    df.loc[i, "about"] = str(about)
    
print(df.head(10))
df.to_csv("New Alumni Connect Members Dataset.csv")
