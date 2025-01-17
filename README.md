

# Invoice Extractor and Expense Calculator

To use this project, just clone this repo and run the following commands:  
```bash
npm install
npm run dev
```

This will start the website for you to check out.

**User Login:**  
- Username: `Ajay@gmail.com`  
- Password: `bonda`  

> As the services might experience inactivity due to non-usage, kindly wait a few minutes after clicking login. If it doesn't respond, refresh or wait until you see an alert or successful login.

---

## Project Overview

The backend is hosted as separate instances, following a microservices architecture. Everything is accessible via APIs.

---

## Project Architecture, Design, and Implementation

### 2.1 System Architecture

#### Preprocessing Architecture:
- **Input data (PDF/PNG):** Preprocessed using a custom workflow.
- **Conversion:** PDF pages are converted to image fragments.
- **Text extraction:** Done using `pyTesseract` from the image inputs or fragments.

#### LLM Architecture:  
Haystack Pipeline Diagram  
![Haystack Pipeline](https://github.com/user-attachments/assets/2f230e40-62c9-4fcd-b4cf-4ccf2f5a5388)

---

#### Postprocessing Architecture:
- Results from the pipeline (`List {Union [Str, Dict[str,str]]}`) are converted into JSON outputs for ease of use.  

![System Architecture](https://github.com/user-attachments/assets/fbd9452b-b8b9-4eda-a629-13124ca0ecac)  
*Figure 2.2: System Architecture*

---

### 2.2 Overview of the Design Process

**Key Design Steps:**
1. **Requirements Gathering:**  
   - Analyzed user and stakeholder needs.
   - Identified features like authentication, file upload, and data processing.

2. **UX Design:**  
   - Designed responsive, user-friendly interfaces.
   - Created wireframes and mockups.

3. **Backend Development:**  
   - Developed APIs with FastAPI for handling uploads and data processing.
   - Integrated OCR APIs for text extraction.

4. **Frontend Development:**  
   - Used Vite + React.js for faster builds and improved responsiveness.

5. **Invoice Processing:**  
   - Leveraged Gemini LLM for extracting invoice data into JSON.
   - Built logic for populating forms dynamically.

6. **Security & Authentication:**  
   - Used modular architecture to secure backend data.
   - Implemented strict password generation and admin-controlled user management.

---

### 2.3 Engineering Principles Used

#### **Cloud Configurations**  
| Service                          | Virtual CPUs | Memory  | Price (USD) |  
|----------------------------------|--------------|---------|-------------|  
| B2s-Standard (Azure, Gemini LLM) | 2            | 4 GB    | $0.065/hr   |  
| Render Free Instance (Web)       | 0.1          | 256 MB  | Free        |  
| Render PSQL Instances            | 0.1          | 256 MB  | Free        |  

#### **Design Features:**
1. **Modularity:**  
   - Three backend services:  
     - FastAPI server for general operations.  
     - Gemini LLM (Azure) for heavy processing.  
     - PostgreSQL database for secure data storage.  
2. **Security:**  
   - Modular design avoids direct connections between components.  
   - Location transparency prevents chained attacks.  

3. **Scalability:**  
   - Microservices ensure independent scaling of each module.

---

### 2.4 Implementation Steps

#### Approach 1: Meta-7b Model  
1. Data collection, preprocessing, and fine-tuning.
2. JSON parsing for form population.  
3. Deployed model with scalability features.

#### Approach 2: Haystack + Gemini Pro API  
1. Integrated Haystack for enhanced pipeline processing.  
2. Validated using Pydantic Validator for accuracy.  

![JSONformer](https://github.com/user-attachments/assets/3ed73917-1a67-4d2f-a1fb-3248af0e201e)  
*Figure 2.3: JSONformer*

---

## Results and Analysis

### Validation Results:
- **Approach 2 (Haystack):** Average latency: **7 seconds**  
- **Approach 1 (Discarded):** Average latency: **23 seconds**

---

## Website Overview

### Login Page  
![Login Page](https://github.com/user-attachments/assets/f80dabcd-22aa-46d0-be9a-9a9f162eecec)  
*The gateway for users to log in and access invoice extraction features.*

### User Dashboard  
![User Dashboard (Web)](https://github.com/user-attachments/assets/0af6518a-1ade-41df-b353-87e68d281c9d)  
![User Dashboard (Mobile)](https://github.com/user-attachments/assets/4d39ed26-24ed-4b56-8405-d185485f3941)  
*Allows employees to upload invoices and review extracted data.*

### User Profile  
![User Profile (Web)](https://github.com/user-attachments/assets/81411031-5de8-4e04-b7ba-4a632264f2da)  
![User Profile (Mobile)](https://github.com/user-attachments/assets/a4dc5535-61d9-49a6-afbb-374b538d1185)  
*Displays personal info and tracks invoice statuses.*

### Finance Dashboard  
![Finance Dashboard (Web)](https://github.com/user-attachments/assets/c8ca128a-af39-428e-8770-d2a72076583e)  
![Finance Dashboard (Mobile)](https://github.com/user-attachments/assets/01273b2b-48bc-4398-8973-666aaa9d0e27)  
*For finance teams to review, approve, and manage invoices.*

---
