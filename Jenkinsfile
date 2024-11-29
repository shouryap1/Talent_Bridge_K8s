pipeline {
    environment {
        DOCKERHUB_CRED = credentials("Docker_Credentials_shouryap1")
        MONGO_URI = credentials("mongo-uri")
        SECRET_KEY = credentials("cloud_secret_key")
        CLOUD_NAME = credentials("cloud_name")
        API_KEY = credentials("cloud_api_key")
        API_SECRET = credentials("cloud_api_secret")
        PORT = "8000" 
    }
    agent any
    tools {nodejs "NODEJS"} 
    stages {
        stage("Stage 1: Git Clone") {
            steps {
                sh '''
                [ -d Talent_Bridge_K8s ] && rm -rf Talent_Bridge_K8s
                git clone https://github.com/shouryap1/Talent_Bridge_K8s.git
                
                '''
            }
        }

        // stage("Stage 2: Backend Testing") {
        //     steps {
        //         sh '''
        //         cd backend
        //         npm i
        //         cd tests
        //         npm install mocha chai sinon
        //         npm test
        //         '''
        //     }
        // }

        // // stage("Stage 3: Build frontend") {
        // //     steps {
        // //         sh '''
        // //         cd Talent_Bridge_K8s/frontend
        // //         npm install
        // //         npm run build
        // //         '''
        // //     }
        // // }
        // stage("Stage 3.5: Remove docker images and container") {
        //     steps {
        //         sh "docker container prune -f"
        //         sh "docker image prune -a -f"
        //     }
        // }
        // // stage("Stage 3.75: Install Trivy ") {
        // //     steps {
        // //         sh '''
        // //         sudo apt install wget
        // //         wget -qO - https://aquasecurity.github.io/trivy-repo/deb/public.key | sudo apt-key add -
        // //         echo "deb https://aquasecurity.github.io/trivy-repo/deb stable main" | sudo tee -a /etc/apt/sources.list.d/trivy.list
        // //         sudo apt update
        // //         sudo apt install trivy
        // //         '''
        // //     }
        // // }
        

        // stage("Stage 4: Creating Docker Image for frontend") {
        //     steps {
        //         sh '''
        //         cd Talent_Bridge_K8s/frontend
        //         docker build -t shouryap1/frontend:latest .
        //         '''
        //     }
        // }
        // // stage("Stage 4.5: Scan Docker Image for frontend") {
        // //     steps {
        // //         sh '''
        // //         trivy image -t shouryap1/frontend:latest .
        // //         '''
        // //     }
        // // }

        // stage("Stage 5: Creating Docker Image for backend") {
        //     steps {
        //         sh '''
        //         cd Talent_Bridge_K8s/backend
        //         docker build -t shouryap1/backend:latest .
        //         '''
        //     }
        // }


        // stage("Stage 6: Push Frontend Docker Image") {
        //     steps {
        //         sh '''
        //         docker login -u ${DOCKERHUB_CRED_USR} -p ${DOCKERHUB_CRED_PSW}
        //         docker push shouryap1/frontend:latest
        //         '''
        //     }
        // }

        // stage("Stage 7: Push Backend Docker Image") {
        //     steps {
        //         sh '''
        //         docker login -u ${DOCKERHUB_CRED_USR} -p ${DOCKERHUB_CRED_PSW}
        //         docker push shouryap1/backend:latest
        //         '''
        //     }
        // }
        stage("Stage 8: Ansible"){
            steps{
                sh'''
                 cd Talent_Bridge_K8s
                 ansible-playbook playbook.yml --ask-become-pass
                 '''
            }

        }
    }
}
