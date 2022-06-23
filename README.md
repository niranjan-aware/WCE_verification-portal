

# WCE_verification-portal *****BY USING BLOCKCHAIN****
WCE hackathon 22

 ****FOR  CORRECT DEMO**** go on this link======https://drive.google.com/file/d/1nPJrt8DtWYL_Snwhqzd9uLDQ6wkjJcmp/view?usp=sharing
 
 FOR ANY QUERY===CONTACT=niroba.aware.26@gmail.com
 
 *******TECHNOLGY********
 **BLCOK CHAIN===> VALIDATION IS DONE BY USING BLOCK CHAIN **
 
 **STACK:  BACKEND=MONGO DB < Node,js <Express
          FRONTEND= HBS TEMPLATES                                    
 
PROJECT EXPLANTION==>
    Student will come  on wce verification portal and chose the first option to ***ISUUE VERIFIED DOCUMENTS***
                 img==>



                               ![Screenshot (196)](https://user-images.githubusercontent.com/97494228/175120132-c843cb62-b526-4957-a128-e245251a4e55.png)
    
   After that he will login ===>***UNIQUE IS HERE ADHAAR ID***
                img==>


![Screenshot (197)](https://user-images.githubusercontent.com/97494228/175120424-358f6e91-f4c7-4539-9bef-c9355ec6874e.png)
    
   Now he will get that wchich certificates clg have on databse for him he choose certificate
                img==>



                                ![Screenshot (198)](https://user-images.githubusercontent.com/97494228/175120670-c7a7c5cb-08d2-43e8-a481-409a5919ca9f.png)
  
  As he choose the certificate
  *****HE WILL GET THE CERTIFICATE WHICH IS PROVIDED WITH UINIQUE $$ HASH ID $$ THIS HASH ID IS GENERATE ON THE TIME OF CERTIFICATE GENERATION ON PORTAL <THIS IS FOR     EACH TYPE OF CERTIFICATE
  ***IT MEANS THAT FOR THE USER 1 THE HASH OF X CERTIFICATE IS ALWAYS SAME AND UNIQUE  WCHICH IS ONLY GENERATED AT THE TIME OF CERTIFICATE  GENERATION CERTIFICAT AND SAVED ON COLLEGE DATA BASE***
     IMG WITH HASH ID PRINTED==>>



  
  ![Screenshot (199)](https://user-images.githubusercontent.com/97494228/175121836-2d7e6bed-70ad-4f90-bb1a-4f073e1cb4d8.png)

  
  AFTER THAT THE NEXT FEATURE FOR COMPANIES AND ORGANISATION
  ***They will come on portal and select the validate option
   img==>



![Screenshot (200)](https://user-images.githubusercontent.com/97494228/175122193-8c348327-2272-4e61-8ee9-aa70347bffd5.png)

  AFTER THAT THEY WILL ENTER THE DETAIL AND ****HASH ID GENERATED WITH BLOCKCHAIN PROVIDED ON STUDENTS CERTIFICATE****AND MORE DETAILS===>
![Screenshot (201)](https://user-images.githubusercontent.com/97494228/175122512-f75935c6-3cdc-47f9-ae17-3094eebbb697.png)

  IF THE CADITATES CERTIFICATED IS VERIFIED HE WILL GET THE RESULT WITH HE CAN VERIFY THAT CERTIFICATE IS ORIGINAL
  ********iMG>
  
  
  ![Screenshot (202)](https://user-images.githubusercontent.com/97494228/175122783-5bd53ca5-80d8-49f3-a1a2-a38123926367.png)

               
This is the website which provides the verified certificates and feater of validation of certificates
to run the project first clone the repo and navigate to the directory of src in main project 
navigate to directory=\main\src\index.js
Run this index.js with nodemon 
For the connection in database make the mongo server running on your local machine to connect with the clg data base
add clg dummy data 
Schema for clg data base=
const ContactSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  middleName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Email is invalid')
      }
    },
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 7,
    validate(value) {
      if (value.toLowerCase().includes('password')) {
        throw new Error('password can not contain password')
      }
    }
  },
  
  rollNumber:{
    type:String,
    required:true
  },

  adharNumber:{
    type:Number,
    required:true,
    minlength:12
  },

  avilableCertificates:{
    type:String,
    required:true
  },
  grade:{
    type:String,
    required:true
  },
  year_of_passing:{
    type:Number,
    required:true
  }

})




By using this Schema add the clg data on database
For further use 
**GO TO BROWSER AND RUN IT ON LOCAL PORT 3000
AND USE IT AS PER THE PROJECT EXPLAINTION AND FOR THIS VIDEO IS ALSO PROVIDED
  
 ASUMMED COLLEGE's DUMMY  DATABASE img==>

![Screenshot (203)](https://user-images.githubusercontent.com/97494228/175123080-cef58fb4-fd3d-49bc-9dcc-8ef331094bc9.png)

  
BLOCKCHAIN STORED ON DATABASE...
  
![Screenshot (204)](https://user-images.githubusercontent.com/97494228/175123215-d9e6a947-e023-4032-9bac-70a4da23cfe4.png)

  ***TIP:if anything goes wrong try by running  the server again



