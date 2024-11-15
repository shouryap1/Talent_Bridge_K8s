pipeline{
    environment{
        DOCKERHUB_CRED = credentials("Docker_Credentials_shouryap1")
    }
    agent any
    stages{
        stage("Stage 1 : Git Clone") {
            steps {
                sh "ls"
                //   sh "git clone https://github.com/shouryap1/Talent-Bridge.git"
            }
        }

        stage("Stage 2 : Backend Testing"){
            steps{
                sh 'cd Talent-Bridge/backend/tests'
                sh 'npm test'
            }
        }

        stage("Stage 3 : Build frontend"){
            steps{
                sh "cd frontend"
                sh "npm build"
            }
        }

        stage("Stage 4 : Creating Docker Image for frontend"){
            steps{
                sh "cd frontend/dist"
                sh "docker build -t shouryap1/frontend ."
            }
        }

        stage("Stage 5 : Creating Docker Image for backend"){
            steps{
                sh "cd backend"
                sh "docker build -t shouryap1/backend ."
            }
        }

        stage('Stage 6 :Push Frontend Docker Image') {
            steps {
                sh "cd frontend"
                sh "docker push shouryap1/frontend"
                
             }
        }
        stage('Stage 7 :Push Backend Docker Image') {
            steps {
                sh "cd backend"
                sh "docker push shouryap1/backend:latest"
             }
        }
    }
}