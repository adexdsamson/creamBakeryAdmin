import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import './index.css';
import {connect} from 'react-redux';
import {getResponseState} from '../../store/selector';
import { Link } from 'react-router-dom';



const Response = ({ Response }) => {
  const showHideClass = Response ? 'res-display-block' : 'res-display-none';
  return (
    <div className={showHideClass}>
      <Row>
        <Col xs={12} sm={12} md={12}>
          <div className='x_panel'>
            <div className='x_content'>
              <div id="alerts"></div>
              <div
                className="btn-toolbar editor" data-role="editor-toolbar" data-target="#editor-one">
                <div
                  className="btn-group">
                  <Link
                    className="btn dropdown-toggle" data-toggle="dropdown"
                    title="Font">
                    <i className="fa fa-font"></i><b className="caret"></b></Link>
                  <ul className="dropdown-menu">
                  </ul>
                </div>

                <div
                  className="btn-group">
                  <Link
                    className="btn dropdown-toggle" data-toggle="dropdown"
                    title="Font Size">
                    <i className="fa fa-text-height"></i>&nbsp;<b className="caret"></b></Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link data-edit="fontSize 5">
                        <p>Huge</p>
                      </Link>
                    </li>
                    <li>
                      <Link data-edit="fontSize 3">
                        <p>Normal</p>
                      </Link>
                    </li>
                    <li>
                      <Link data-edit="fontSize 1">
                        <p>Small</p>
                      </Link>
                    </li>
                  </ul>
                </div>


                <div className="btn-group">
                  <Link
                    className="btn"
                    data-edit="bold"
                    title="Bold (Ctrl/Cmd+B)">
                    <i className="fa fa-bold"></i>
                  </Link>
                  <Link
                    className="btn"
                    data-edit="italic"
                    title="Italic (Ctrl/Cmd+I)">
                    <i className="fa fa-italic"></i>
                  </Link>
                  <Link
                    className="btn"
                    data-edit="strikethrough" title="Strikethrough">
                    <i className="fa fa-strikethrough"></i>
                  </Link>
                  <Link
                    className="btn"
                    data-edit="underline"
                    title="Underline (Ctrl/Cmd+U)">
                    <i className="fa fa-underline"></i>
                  </Link>
                </div>

                
                <div className="btn-group">
                  <Link
                    className="btn" data-edit="insertunorderedlist" title="Bullet list">
                    <i className="fa fa-list-ul"></i>
                  </Link>
                  <Link
                    className="btn" data-edit="insertorderedlist"
                    title="Number list">
                    <i className="fa fa-list-ol"></i>
                  </Link>
                  <Link
                    className="btn"
                    data-edit="outdent"
                    title="Reduce indent (Shift+Tab)">
                    <i className="fa fa-dedent"></i>
                  </Link>
                  <Link
                    className="btn"
                    data-edit="indent"
                    title="Indent (Tab)">
                    <i className="fa fa-indent"></i>
                  </Link>
                </div>

                <div className="btn-group">
                  <Link
                    className="btn"
                    data-edit="justifyleft"
                    title="Align Left (Ctrl/Cmd+L)">
                    <i className="fa fa-align-left"></i>
                  </Link>
                  <Link
                    className="btn"
                    data-edit="justifycenter"
                    title="Center (Ctrl/Cmd+E)">
                    <i className="fa fa-align-center"></i>
                  </Link>
                  <Link
                    className="btn"
                    data-edit="justifyright"
                    title="Align Right (Ctrl/Cmd+R)">
                    <i className="fa fa-align-right"></i>
                  </Link>
                  <Link
                    className="btn"
                    data-edit="justifyfull"
                    title="Justify (Ctrl/Cmd+J)">
                    <i className="fa fa-align-justify"></i>
                  </Link>
                </div>

                <div className="btn-group">
                  <Link
                    className="btn dropdown-toggle" data-toggle="dropdown"
                    title="Hyperlink">
                    <i className="fa fa-link"></i>
                  </Link>
                  <div
                    className="dropdown-menu input-append">
                    <input
                      className="span2"
                      placeholder="URL"
                      type="text"
                      data-edit="createLink"
                    />
                    <button
                      className="btn"
                      type="button"
                    >Add</button>
                  </div>
                  <Link
                    className="btn"
                    data-edit="unlink"
                    title="Remove Hyperlink">
                    <i className="fa fa-cut"></i>
                  </Link>
                </div>

                <div
                  id="editor-one"
                  className="editor-wrapper">
                </div>

              </div>
              <textarea
                name="descr"
                id="descr"
                placeholder='response'
              ></textarea>
            </div>
            <Button variant='success' className='pl-4 pr-4 floatRight'> Send </Button>
          </div>
        </Col>
    </Row>
    </div>
  );
};

const mapStateToProps = state => getResponseState(state);


export default connect(mapStateToProps)(Response);