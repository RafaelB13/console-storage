// Code generated by go-swagger; DO NOT EDIT.

// This file is part of MinIO Console Server
// Copyright (c) 2023 MinIO, Inc.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.
//

package auth

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"net/http"

	"github.com/go-openapi/runtime"

	"github.com/rafaelb13/console-storage/models"
)

// LoginDetailOKCode is the HTTP code returned for type LoginDetailOK
const LoginDetailOKCode int = 200

/*
LoginDetailOK A successful response.

swagger:response loginDetailOK
*/
type LoginDetailOK struct {

	/*
	  In: Body
	*/
	Payload *models.LoginDetails `json:"body,omitempty"`
}

// NewLoginDetailOK creates LoginDetailOK with default headers values
func NewLoginDetailOK() *LoginDetailOK {

	return &LoginDetailOK{}
}

// WithPayload adds the payload to the login detail o k response
func (o *LoginDetailOK) WithPayload(payload *models.LoginDetails) *LoginDetailOK {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the login detail o k response
func (o *LoginDetailOK) SetPayload(payload *models.LoginDetails) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *LoginDetailOK) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(200)
	if o.Payload != nil {
		payload := o.Payload
		if err := producer.Produce(rw, payload); err != nil {
			panic(err) // let the recovery middleware deal with this
		}
	}
}

/*
LoginDetailDefault Generic error response.

swagger:response loginDetailDefault
*/
type LoginDetailDefault struct {
	_statusCode int

	/*
	  In: Body
	*/
	Payload *models.APIError `json:"body,omitempty"`
}

// NewLoginDetailDefault creates LoginDetailDefault with default headers values
func NewLoginDetailDefault(code int) *LoginDetailDefault {
	if code <= 0 {
		code = 500
	}

	return &LoginDetailDefault{
		_statusCode: code,
	}
}

// WithStatusCode adds the status to the login detail default response
func (o *LoginDetailDefault) WithStatusCode(code int) *LoginDetailDefault {
	o._statusCode = code
	return o
}

// SetStatusCode sets the status to the login detail default response
func (o *LoginDetailDefault) SetStatusCode(code int) {
	o._statusCode = code
}

// WithPayload adds the payload to the login detail default response
func (o *LoginDetailDefault) WithPayload(payload *models.APIError) *LoginDetailDefault {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the login detail default response
func (o *LoginDetailDefault) SetPayload(payload *models.APIError) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *LoginDetailDefault) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(o._statusCode)
	if o.Payload != nil {
		payload := o.Payload
		if err := producer.Produce(rw, payload); err != nil {
			panic(err) // let the recovery middleware deal with this
		}
	}
}
