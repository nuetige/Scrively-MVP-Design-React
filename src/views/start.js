import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './start.css'

const START = (props) => {
  return (
    <div className="start-container1">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="startstart">
        <div className="start-pagewrapper">
          <div className="start-container2">
            <div className="startnavbardashboard">
              <img
                alt="LogoI3896"
                src="/external/logoi3896-q4zj.svg"
                className="start-logo"
              />
              <div className="start-profilemenu">
                <div className="start-avatar">
                  <img
                    alt="Ellipse1I3896"
                    src="/external/ellipse1i3896-2zsb-200h.png"
                    className="start-ellipse1"
                  />
                </div>
              </div>
            </div>
          </div>
          <img
            alt="divider3896"
            src="/external/divider3896-ldm.svg"
            className="start-divider1"
          />
          <div className="start-hero">
            <img
              alt="Backgroundimage3896"
              src="/external/backgroundimage3896-f02-600h.png"
              className="start-backgroundimage"
            />
            <div className="start-heading">
              <span className="start-text10">
                Start your story with a single idea
              </span>
              <span className="start-text11 BodyLargemedium">
                Type an idea and we’ll turn it into a magical story.
              </span>
            </div>
            <div className="start-form">
              <div className="start-startpromptcomponent">
                <textarea
                  placeholder="e.g. A young fox who dreams of flying..."
                  className="start-textarea textarea prompt-area"
                ></textarea>
              </div>
              <Link to="/story-builder" className="startnew-actionbutton">
                <img
                  alt="IconsAIsmallI3896"
                  src="/external/iconsaismalli3896-6t5d.svg"
                  className="start-icons-a-ismall"
                />
                <span className="start-text12 BodySmallMedium">
                  Create a story
                </span>
              </Link>
              <span className="start-text13 BodySmallMedium">or</span>
              <span className="start-text14 BodyDefaultMedium">
                Start from scratch
              </span>
            </div>
          </div>
          <img
            alt="divider3896"
            src="/external/divider3896-943r.svg"
            className="start-divider2"
          />
          <div className="start-container3">
            <div className="start-projects">
              <div className="start-header1">
                <div className="start-frame11">
                  <span className="start-text15 HeadingH2">My books</span>
                  <span className="start-text16 BodyDefaultRegular">
                    Start a new book or continue an existing one.
                  </span>
                </div>
              </div>
              <div className="start-grid1">
                <div className="start-bookcard1">
                  <div className="start-preview10">
                    <img
                      alt="Screenshot20250120at1727341I3896"
                      src="/external/screenshot20250120at1727341i3896-ftz-200w.png"
                      className="start-screenshot20250120at17273411"
                    />
                  </div>
                  <div className="start-pagenumber1">
                    <span className="start-text17 BodyMicroRegular">
                      Untitled book
                    </span>
                  </div>
                </div>
                <div className="start-bookcard2">
                  <div className="start-preview11">
                    <img
                      alt="Screenshot20250120at1727341I3896"
                      src="/external/screenshot20250120at1727341i3896-z08-200w.png"
                      className="start-screenshot20250120at17273412"
                    />
                  </div>
                  <div className="start-pagenumber2">
                    <span className="start-text18 BodyMicroRegular">
                      Deeper into Dreams
                    </span>
                  </div>
                </div>
                <div className="start-bookcard3">
                  <div className="start-preview12">
                    <img
                      alt="Screenshot20250120at1727341I3896"
                      src="/external/screenshot20250120at1727341i3896-2xap-200w.png"
                      className="start-screenshot20250120at17273413"
                    />
                  </div>
                  <div className="start-pagenumber3">
                    <span className="start-text19 BodyMicroRegular">
                      Minimal Photo Book
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            alt="divider3896"
            src="/external/divider3896-f37s.svg"
            className="start-divider3"
          />
          <div className="start-container4">
            <div className="start-templates1">
              <div className="start-header2">
                <div className="start-frame101">
                  <div className="start-tabs1">
                    <span className="start-text20 HeadingH2">
                      Choose your Book Mode
                    </span>
                  </div>
                </div>
                <div className="start-categories1">
                  <span className="start-text21 BodyDefaultRegular">
                    Get started fast with guided templates.
                  </span>
                </div>
              </div>
              <div className="start-grid2">
                <div className="start-template1">
                  <img
                    alt="image3896"
                    src="/external/image3896-3sin-200h.png"
                    className="start-image10"
                  />
                  <div className="start-frame121">
                    <span className="start-text22 HeadingH4">
                      <span>Turn drawings into</span>
                      <br></br>
                      <span>a storybook</span>
                    </span>
                    <span className="start-text26 BodyMicroRegular">
                      Transform your drawings into a storybook with guided
                      prompts.
                    </span>
                  </div>
                </div>
                <div className="start-template2">
                  <img
                    alt="Preview3896"
                    src="/external/preview3896-2dji-200h.png"
                    className="start-preview13"
                  />
                  <div className="start-frame122">
                    <span className="start-text27 HeadingH4">
                      <span>
                        Use pre-written
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <br></br>
                      <span>story templates</span>
                    </span>
                    <span className="start-text31 BodyMicroRegular">
                      Quickly generate a story by filling in pre-written
                      prompts.
                    </span>
                  </div>
                </div>
                <div className="start-template3">
                  <img
                    alt="Preview3896"
                    src="/external/preview3896-8k3-200h.png"
                    className="start-preview14"
                  />
                  <div className="start-frame123">
                    <span className="start-text32 HeadingH4">
                      <span>Turn your story into a</span>
                      <br></br>
                      <span>coloring book!</span>
                    </span>
                    <span className="start-text36 BodyMicroRegular">
                      Turn any story into an illustrated coloring book.
                    </span>
                  </div>
                </div>
                <div className="start-template4">
                  <img
                    alt="Preview3896"
                    src="/external/preview3896-j796-200h.png"
                    className="start-preview15"
                  />
                  <div className="start-frame124">
                    <span className="start-text37 HeadingH4">
                      Make your child the hero of a comics
                    </span>
                    <span className="start-text38 BodyMicroRegular">
                      Turn any story into an illustrated coloring book.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            alt="divider3896"
            src="/external/divider3896-g4d.svg"
            className="start-divider4"
          />
          <div className="start-container5">
            <div className="start-templates2">
              <div className="start-header3">
                <div className="start-frame102">
                  <div className="start-tabs2">
                    <span className="start-text39 HeadingH2">
                      Browse templates
                    </span>
                    <span className="start-text40 HeadingH2">
                      Favorites
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                  <div className="start-searchfield">
                    <img
                      alt="IconsSearchI3896"
                      src="/external/iconssearchi3896-5nyl.svg"
                      className="start-icons-search"
                    />
                    <span className="start-text41 BodySmallRegular">
                      Search...
                    </span>
                  </div>
                </div>
                <div className="start-categories2">
                  <div className="start-tag10 chips">
                    <span className="start-text42 BodySmallMedium">
                      Adventure
                    </span>
                  </div>
                  <div className="start-tag11 chips">
                    <span className="start-text43 BodySmallMedium">
                      Biography
                    </span>
                  </div>
                  <div className="start-tag12 chips">
                    <p className="BodySmallMedium">Children’s books</p>
                  </div>
                  <div className="start-tag13 chips">
                    <p className="start-text45 BodySmallMedium">Cookbooks</p>
                  </div>
                  <div className="start-tag14 chips">
                    <p className="start-text46 BodySmallMedium">Educational</p>
                  </div>
                  <div className="start-tag15 chips">
                    <span className="start-text47 BodySmallMedium">
                      Fantasy
                    </span>
                  </div>
                  <div className="start-tag16 chips">
                    <span className="start-text48 BodySmallMedium">
                      Fiction
                    </span>
                  </div>
                  <div className="start-tag17 chips">
                    <span className="start-text49 BodySmallMedium">
                      Graphic Novels
                    </span>
                  </div>
                  <div className="start-tag18 chips">
                    <span className="start-text50 BodySmallMedium">
                      Historical
                    </span>
                  </div>
                  <div className="start-tag19 chips">
                    <span className="start-text51 BodySmallMedium">Horror</span>
                  </div>
                  <div className="start-tag20 chips">
                    <span className="start-text52 BodySmallMedium">
                      Non-Fiction
                    </span>
                  </div>
                  <div className="start-tag21 chips">
                    <span className="start-text53 BodySmallMedium">
                      Lifestyle
                    </span>
                  </div>
                  <div className="start-tag22 chips">
                    <span className="start-text54 BodySmallMedium">
                      Philosophy
                    </span>
                  </div>
                  <div className="start-tag23 chips">
                    <span className="start-text55 BodySmallMedium">Poetry</span>
                  </div>
                  <div className="start-tag24 chips">
                    <span className="start-text56 BodySmallMedium">
                      Romance
                    </span>
                  </div>
                  <div className="start-tag25 chips">
                    <span className="start-text57 BodySmallMedium">
                      Science &amp; Technology
                    </span>
                  </div>
                  <div className="start-tag26 chips">
                    <span className="start-text58 BodySmallMedium">Travel</span>
                  </div>
                </div>
              </div>
              <div className="start-grid3">
                <div className="start-templatecard10">
                  <div className="start-preview16">
                    <img
                      alt="imageI3896"
                      src="/external/imagei3896-hnoa-200h.png"
                      className="start-image11"
                    />
                  </div>
                  <div className="start-templatename10">
                    <span className="start-text59 BodySmallRegular">
                      Template name for card
                    </span>
                    <img
                      alt="IconsHeartI3896"
                      src="/external/iconshearti3896-c708.svg"
                      className="start-icons-heart1"
                    />
                  </div>
                </div>
                <div className="start-templatecard11">
                  <div className="start-preview17">
                    <img
                      alt="imageI3896"
                      src="/external/imagei3896-y3b9-200h.png"
                      className="start-image12"
                    />
                  </div>
                  <div className="start-templatename11">
                    <span className="start-text60 BodySmallRegular">
                      Template name for card
                    </span>
                    <img
                      alt="IconsHeartI3896"
                      src="/external/iconshearti3896-nkb.svg"
                      className="start-icons-heart2"
                    />
                  </div>
                </div>
                <div className="start-templatecard12">
                  <div className="start-preview18">
                    <img
                      alt="imageI3896"
                      src="/external/imagei3896-zwld-200h.png"
                      className="start-image13"
                    />
                  </div>
                  <div className="start-templatename12">
                    <span className="start-text61 BodySmallRegular">
                      Template name for card
                    </span>
                    <img
                      alt="IconsHeartI3896"
                      src="/external/iconshearti3896-jwl6.svg"
                      className="start-icons-heart3"
                    />
                  </div>
                </div>
                <div className="start-templatecard13">
                  <div className="start-preview19">
                    <img
                      alt="imageI3896"
                      src="/external/imagei3896-62sc-200h.png"
                      className="start-image14"
                    />
                  </div>
                  <div className="start-templatename13">
                    <span className="start-text62 BodySmallRegular">
                      Template name for card
                    </span>
                    <img
                      alt="IconsHeartI3896"
                      src="/external/iconshearti3896-id9g.svg"
                      className="start-icons-heart4"
                    />
                  </div>
                </div>
                <div className="start-templatecard14">
                  <div className="start-preview20">
                    <img
                      alt="imageI3896"
                      src="/external/imagei3896-wtb5-200h.png"
                      className="start-image15"
                    />
                  </div>
                  <div className="start-templatename14">
                    <span className="start-text63 BodySmallRegular">
                      Template name for card
                    </span>
                  </div>
                </div>
                <div className="start-templatecard15">
                  <div className="start-preview21">
                    <img
                      alt="imageI3896"
                      src="/external/imagei3896-y7cj-200h.png"
                      className="start-image16"
                    />
                  </div>
                  <div className="start-templatename15">
                    <span className="start-text64 BodySmallRegular">
                      Template name for card
                    </span>
                  </div>
                </div>
                <div className="start-templatecard16">
                  <div className="start-preview22">
                    <img
                      alt="imageI3896"
                      src="/external/imagei3896-ivhm-200h.png"
                      className="start-image17"
                    />
                  </div>
                  <div className="start-templatename16">
                    <span className="start-text65 BodySmallRegular">
                      Template name for card
                    </span>
                  </div>
                </div>
                <div className="start-templatecard17">
                  <div className="start-preview23">
                    <img
                      alt="imageI3896"
                      src="/external/imagei3896-rv2-200h.png"
                      className="start-image18"
                    />
                  </div>
                  <div className="start-templatename17">
                    <span className="start-text66 BodySmallRegular">
                      Template name for card
                    </span>
                  </div>
                </div>
                <div className="start-templatecard18">
                  <div className="start-preview24">
                    <img
                      alt="imageI3896"
                      src="/external/imagei3896-4d8q-200h.png"
                      className="start-image19"
                    />
                  </div>
                  <div className="start-templatename18">
                    <span className="start-text67 BodySmallRegular">
                      Template name for card
                    </span>
                  </div>
                </div>
                <div className="start-templatecard19">
                  <div className="start-preview25">
                    <img
                      alt="imageI3896"
                      src="/external/imagei3896-k4mfa-200h.png"
                      className="start-image20"
                    />
                  </div>
                  <div className="start-templatename19">
                    <span className="start-text68 BodySmallRegular">
                      Template name for card
                    </span>
                  </div>
                </div>
                <div className="start-templatecard20">
                  <div className="start-preview26">
                    <img
                      alt="imageI3896"
                      src="/external/imagei3896-jqg-200h.png"
                      className="start-image21"
                    />
                  </div>
                  <div className="start-templatename20">
                    <span className="start-text69 BodySmallRegular">
                      Template name for card
                    </span>
                  </div>
                </div>
                <div className="start-templatecard21">
                  <div className="start-preview27">
                    <img
                      alt="imageI3896"
                      src="/external/imagei3896-laxk-200h.png"
                      className="start-image22"
                    />
                  </div>
                  <div className="start-templatename21">
                    <span className="start-text70 BodySmallRegular">
                      Template name for card
                    </span>
                  </div>
                </div>
                <div className="start-templatecard22">
                  <div className="start-preview28">
                    <img
                      alt="imageI3896"
                      src="/external/imagei3896-5ph-200h.png"
                      className="start-image23"
                    />
                  </div>
                  <div className="start-templatename22">
                    <span className="start-text71 BodySmallRegular">
                      Template name for card
                    </span>
                  </div>
                </div>
                <div className="start-templatecard23">
                  <div className="start-preview29">
                    <img
                      alt="imageI3896"
                      src="/external/imagei3896-uk6i-200h.png"
                      className="start-image24"
                    />
                  </div>
                  <div className="start-templatename23">
                    <span className="start-text72 BodySmallRegular">
                      Template name for card
                    </span>
                  </div>
                </div>
                <div className="start-templatecard24">
                  <div className="start-preview30">
                    <img
                      alt="imageI3896"
                      src="/external/imagei3896-phmi-200h.png"
                      className="start-image25"
                    />
                  </div>
                  <div className="start-templatename24">
                    <span className="start-text73 BodySmallRegular">
                      Template name for card
                    </span>
                  </div>
                </div>
                <div className="start-templatecard25">
                  <div className="start-preview31">
                    <img
                      alt="imageI3896"
                      src="/external/imagei3896-eyol-200h.png"
                      className="start-image26"
                    />
                  </div>
                  <div className="start-templatename25">
                    <span className="start-text74 BodySmallRegular">
                      Template name for card
                    </span>
                  </div>
                </div>
                <div className="start-templatecard26">
                  <div className="start-preview32">
                    <img
                      alt="imageI3896"
                      src="/external/imagei3896-0siq-200h.png"
                      className="start-image27"
                    />
                  </div>
                  <div className="start-templatename26">
                    <span className="start-text75 BodySmallRegular">
                      Template name for card
                    </span>
                  </div>
                </div>
                <div className="start-templatecard27">
                  <div className="start-preview33">
                    <img
                      alt="imageI3896"
                      src="/external/imagei3896-0o2n-200h.png"
                      className="start-image28"
                    />
                  </div>
                  <div className="start-templatename27">
                    <span className="start-text76 BodySmallRegular">
                      Template name for card
                    </span>
                  </div>
                </div>
                <div className="start-templatecard28">
                  <div className="start-preview34">
                    <img
                      alt="imageI3896"
                      src="/external/imagei3896-603l-200h.png"
                      className="start-image29"
                    />
                  </div>
                  <div className="start-templatename28">
                    <span className="start-text77 BodySmallRegular">
                      Template name for card
                    </span>
                  </div>
                </div>
                <div className="start-templatecard29">
                  <div className="start-preview35">
                    <img
                      alt="imageI3896"
                      src="/external/imagei3896-bdhd-200h.png"
                      className="start-image30"
                    />
                  </div>
                  <div className="start-templatename29">
                    <span className="start-text78 BodySmallRegular">
                      Template name for card
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default START
