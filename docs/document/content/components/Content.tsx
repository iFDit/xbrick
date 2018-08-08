import React from 'react'
import { DocCode } from 'docs/document/content/components/DocCode'
import { Container, Row, Nav, NavItem, NavLink, Fade, Col } from 'xbrick'

export interface INavOption {
  text: string
  anchor: string
  wrapProps?: any
}

export interface ISectionOption {
  title: string
  describe: string
  content: React.ReactNode
  codeText?: string | null
  wrapProps?: any
}

export interface IApiOption {
  title: string
  content: React.ReactNode
  header?: boolean
  wrapProps?: any
}

export class Content {
  private navs: any[] = []
  private sections: any[] = []
  private apis: any[] = []
  private title: string = ''

  constructor(title: string) {
    this.title = title
  }

  public addNav(navOption: INavOption) {
    this.navs.push({ wrapProps: {}, ...navOption })
    return this
  }

  public addSection(sectionOption: ISectionOption) {
    this.sections.push({ wrapProps: {}, ...sectionOption })
    return this
  }

  public addAPI(apiOption: IApiOption) {
    this.apis.push({ wrapProps: {}, ...apiOption })
    return this
  }

  public render() {
    return (
      <Fade from={0} to={1}>
        <header className="doc-content-header">
          <h1 style={{fontWeight: 300}}>{this.title}</h1>
          <div className="sticky-top-content">
            <Nav className="doc-nav">
              {this.navs.map((nav, idx) => {
                return (
                  <NavItem key={idx} {...nav.wrapProps}>
                    <NavLink href={`#${nav.anchor}`}>{nav.text}</NavLink>
                  </NavItem>
                )
              })}
            </Nav>
          </div>
        </header>
        <Container tag="main" fluid className="doc-content-container">
          {this.sections.map((section, idx) => {
            const navItem = this.navs.filter(nav => section.title === nav.text)[0]
            if (navItem) {
              const anchor = navItem.anchor
              return (
                <section key={idx}>
                  <Row className="doc-content-title">
                    <Col>
                      <a id={anchor} className="doc-anchor" />
                      <h5>{section.title}</h5>
                    </Col>
                  </Row>
                  <Row className="doc-content-text" {...section.wrapProps}>
                    {section.content}
                  </Row>
                  {section.codeText ? <DocCode codeText={section.codeText} /> : null}
                </section>
              )
            }
            return null
          })}
          {this.apis.map((api, idx) => {
            return (
              <section key={`api${idx}`}>
                {api.header ? <Row className="doc-content-title">
                  <Col>
                    <a id="api" className="doc-anchor" />
                    <h5>API</h5>
                  </Col>
                </Row> : null }
                {/* link color content */}
                <Row className="doc-content-text" {...api.wrapProps}>
                  <h6>{api.title}</h6>
                  <Col xs="12">
                    <div dangerouslySetInnerHTML={{__html: api.content}} className="doc-api-table-container"/>
                  </Col>
                </Row>
              </section>
            )
          })}
        </Container>
      </Fade>
    )
  }
}