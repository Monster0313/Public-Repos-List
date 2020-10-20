<template>
  <div id="home">
    <div class="content">
      <div class="section-title">
        <div class="title">
          <h1>實作題：列出自己8個Public Github Repos</h1>
          <h3>請輸入您的Github帳號：</h3>
          <form @submit.prevent="getRepos">
            <input type="text" v-model="user">
            <button type="submit">
              <span>送出</span>
            </button>
          </form>
        </div>
      </div>
      <div class="section" :class="[`section-${index}`]" v-for="(item, index) in apiReposData.slice(0, 8)" :key="index">
        <div>
          <li>
            <p>{{'標題：' + item.full_name }}</p>
            <p v-if="item.description">{{'說明：' + item.description }}</p>
            <p v-if="!item.description">此專案沒有詳細說明</p>
            <p>專案網址：<a :href="item.svn_url">{{ item.svn_url }}</a></p>
            <p>最後更新日期：{{ item.updated_at.slice(0, 10)  }}</p>
          </li>
        </div>
        <div class="activebg" :id="[`pic${index}`]"></div>
      </div>
      <div class="footer">
        <p class="pc-footer">
          <span>Photo by <a href="https://unsplash.com/@nasa">Nasa @Unsplash</a></span>
        </p>
        <p class="mobile-footer">
          <span>Photo by <a href="https://unsplash.com/@pawel_czerwinski">Pawel Czerwinski @Unsplash</a></span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Home',
  data () {
    const apiRepos = ''
    const apiReposData = ''
    return {
      user: 'Monster0313',
      apiRepos: apiRepos,
      apiReposData: apiReposData,
      ratio: 0.05,
      positionX: '50%',
      positionY0: 30,
      positionY1: 100,
      positionY2: 150,
      positionY3: 150,
      positionY4: 150,
      positionY5: 150,
      positionY6: 150,
      positionY7: 150,
      Y0: 0,
      Y1: 0,
      Y2: 0,
      Y3: 0,
      Y4: 0,
      Y5: 0,
      Y6: 0,
      Y7: 0,
      titlePositon: 'static',
      titleColor: 'transparent',
      titleBorder: '0'
    }
  },
  methods: {
    getRepos () {
      const REPO_URL = 'https://api.github.com/users/'
      axios.get(`${REPO_URL + this.user}/repos`)
        .then(response => {
          this.apiRepos = response
          this.apiReposData = response.data
          console.log(response)
        })
    },
    handleScroll () {
      const scrollTop =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop
      console.log(scrollTop)
      this.positionY0 = this.Y0 - scrollTop * this.ratio
      this.positionY1 = this.Y1 - scrollTop * this.ratio
      this.positionY2 = this.Y2 - scrollTop * this.ratio
      this.positionY3 = this.Y3 - scrollTop * this.ratio
      this.positionY4 = this.Y4 - scrollTop * this.ratio
      this.positionY5 = this.Y5 - scrollTop * this.ratio
      this.positionY6 = this.Y6 - scrollTop * this.ratio
      this.positionY7 = this.Y7 - scrollTop * this.ratio
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
    window.onload = () => {
      const pic0 = document.getElementById('pic0')
      const pic1 = document.getElementById('pic1')
      const pic2 = document.getElementById('pic2')
      const pic3 = document.getElementById('pic3')
      const pic4 = document.getElementById('pic4')
      const pic5 = document.getElementById('pic5')
      const pic6 = document.getElementById('pic6')
      const pic7 = document.getElementById('pic7')
      this.positionY0 = this.Y0 = pic0.offsetTop * this.ratio
      this.positionY1 = this.Y1 = pic1.offsetTop * this.ratio
      this.positionY2 = this.Y2 = pic2.offsetTop * this.ratio
      this.positionY3 = this.Y3 = pic3.offsetTop * this.ratio
      this.positionY4 = this.Y4 = pic4.offsetTop * this.ratio
      this.positionY5 = this.Y5 = pic5.offsetTop * this.ratio
      this.positionY6 = this.Y6 = pic6.offsetTop * this.ratio
      this.positionY7 = this.Y7 = pic7.offsetTop * this.ratio
    }
  }
}
</script>

<style lang="scss">
@media (min-width: 320px) and (max-width: 767px) {
  #home {
    .content {
      .section-title {
          width: 100%;
          height: 150px;
          background-color: rgba($color: #000000, $alpha: 0.6);
          padding-top: 10px;
          padding-bottom: 10px;
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          .title {
            text-align: center;
            padding-top: 20px;
            min-width: 80%;
            h1 {
              margin: 0;
              font-size: 1em;
            }
            form {
              display: flex;
              justify-content: center;
              align-items: center;
              button {
                width: 60px;
                height: 30px;
                margin-left: 10px;
                padding: 1px;
                span {
                  font-size: 15px;
                }
              }
            }
          }
        }
      .section {
        min-height: 30vh;
        position: relative;
        li {
          p {
            a:link {
              color: white;
              text-decoration: none;
              background-color: rgba($color: #dddddd, $alpha: 0.8);
              line-height: 1.5;
            }
            a:visited {
              color: white;
              text-decoration: none;
            }
          }
        }
        .activebg {
          position: relative;
          width: 100%;
          height: 600px;
          background: #000;
          background-attachment: fixed;
          background-position: center 0;
          background-repeat: no-repeat;
        }
        #pic0 {
          background-image: url(https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80);
        }
        #pic1 {
          background-image: url(https://images.unsplash.com/photo-1603050785682-e8304e078c39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80);
        }
        #pic2 {
          background-image: url(https://images.unsplash.com/photo-1602536052359-ef94c21c5948?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60);
        }
        #pic3 {
          background-image: url(https://images.unsplash.com/photo-1601925131481-e9fc8668ea3f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60);
        }
        #pic4 {
          background-image: url(https://images.unsplash.com/photo-1600627255439-a41d2a40b3da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80);
        }
        #pic5 {
          background-image: url(https://images.unsplash.com/photo-1600636210649-8dce6a35173a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80);
        }
        #pic6 {
          background-image: url(https://images.unsplash.com/photo-1598557360303-bc7efa2ffa81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60);
        }
        #pic7 {
          background-image: url(https://images.unsplash.com/photo-1595878715977-2e8f8df18ea8?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60);
        }
      }
      .section-0, .section-1, .section-2, .section-3, .section-4, .section-5, .section-6, .section-7, .section-8 {
        padding-top: 20px;
        width: 100%;
        position: relative;
        list-style-type: none;
      }
      .section-0, .section-1, .section-2, .section-3, .section-4, .section-5, .section-6, .section-7, .section-8 div {
        background-color: rgba($color: #000000, $alpha: 0.4);
        color: white;
        text-align: left;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        div {
          width: 90%;
          li {
            min-height: 20vh;
            width: 90%;
            p {
              font-size: 1em;
            }
          }
        }
      }
      .section-0 {
        margin-top: 5px;
      }
      .footer {
        height: 30px;
        background-color: #000;
        .pc-footer {
          display: none;
        }
        .mobile-footer {
          color: white;
          margin: 0;
          padding-top: 5px;
          span {
            a:link {
              color: white;
              text-decoration: none;
            }
            a:visited {
              color: white;
              text-decoration: none;
            }
          }
        }
      }
    }
  }
}
@media (min-width: 768px) {
  #home {
    .content {
      .section-title {
          width: 100%;
          height: 180px;
          background-color: rgba($color: #000000, $alpha: 0.6);
          padding-top: 20px;
          padding-bottom: 20px;
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          .title {
            text-align: center;
            padding-top: 20px;
            width: 50%;
            h1 {
              margin: 0;
            }
            form {
              display: flex;
              justify-content: center;
              align-items: center;
              button {
                width: 60px;
                height: 30px;
                margin-left: 10px;
                padding: 1px;
                span {
                  font-size: 15px;
                }
              }
            }
          }
        }
      .section {
        min-height: 30vh;
        position: relative;
        li {
          p {
            a:link {
              color: white;
              text-decoration: none;
              background-color: rgba($color: #dddddd, $alpha: 0.8);
              line-height: 1.5;
            }
            a:visited {
              color: white;
              text-decoration: none;
            }
          }
        }
        .activebg {
          position: relative;
          width: 100%;
          height: 600px;
          background: #000;
          background-attachment: fixed;
          background-position: center 0;
          background-repeat: no-repeat;
        }
        #pic0 {
          background-image: url(https://images.unsplash.com/photo-1457364887197-9150188c107b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80);
        }
        #pic1 {
          background-image: url(https://images.unsplash.com/photo-1494022299300-899b96e49893?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80);
        }
        #pic2 {
          background-image: url(https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80);
        }
        #pic3 {
          background-image: url(https://images.unsplash.com/photo-1446776877081-d282a0f896e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80);
        }
        #pic4 {
          background-image: url(https://images.unsplash.com/photo-1539321908154-04927596764d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1955&q=80);
        }
        #pic5 {
          background-image: url(https://images.unsplash.com/photo-1496715976403-7e36dc43f17b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80);
        }
        #pic6 {
          background-image: url(https://images.unsplash.com/photo-1447433819943-74a20887a81e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1975&q=80);
        }
        #pic7 {
          background-image: url(https://images.unsplash.com/photo-1447433909565-04bfc496fe73?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80);
        }
      }
      .section-0, .section-1, .section-2, .section-3, .section-4, .section-5, .section-6, .section-7, .section-8 {
        padding-top: 20px;
        width: 100%;
        position: relative;
        list-style-type: none;
      }
      .section-0, .section-1, .section-2, .section-3, .section-4, .section-5, .section-6, .section-7, .section-8 div {
        background-color: rgba($color: #000000, $alpha: 0.4);
        color: white;
        text-align: left;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        div {
          li {
            width: 600px;
            min-height: 20vh;
            padding-left: 10px;
            p {
              font-size: 1.2em;
            }
          }
        }
      }
      .section-0 {
        margin-top: 5px;
      }
      .footer {
        height: 30px;
        background-color: #000;
        .pc-footer {
          color: white;
          margin: 0;
          padding-top: 5px;
          span {
            a:link {
              color: white;
              text-decoration: none;
            }
            a:visited {
              color: white;
              text-decoration: none;
            }
          }
        }
        .mobile-footer {
          display: none;
        }
      }
    }
  }
}
</style>
