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

package bucket

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"net/http"

	"github.com/go-openapi/runtime"

	"github.com/rafaelb13/console-storage/models"
)

// PutBucketTagsOKCode is the HTTP code returned for type PutBucketTagsOK
const PutBucketTagsOKCode int = 200

/*
PutBucketTagsOK A successful response.

swagger:response putBucketTagsOK
*/
type PutBucketTagsOK struct {
}

// NewPutBucketTagsOK creates PutBucketTagsOK with default headers values
func NewPutBucketTagsOK() *PutBucketTagsOK {

	return &PutBucketTagsOK{}
}

// WriteResponse to the client
func (o *PutBucketTagsOK) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.Header().Del(runtime.HeaderContentType) //Remove Content-Type on empty responses

	rw.WriteHeader(200)
}

/*
PutBucketTagsDefault Generic error response.

swagger:response putBucketTagsDefault
*/
type PutBucketTagsDefault struct {
	_statusCode int

	/*
	  In: Body
	*/
	Payload *models.APIError `json:"body,omitempty"`
}

// NewPutBucketTagsDefault creates PutBucketTagsDefault with default headers values
func NewPutBucketTagsDefault(code int) *PutBucketTagsDefault {
	if code <= 0 {
		code = 500
	}

	return &PutBucketTagsDefault{
		_statusCode: code,
	}
}

// WithStatusCode adds the status to the put bucket tags default response
func (o *PutBucketTagsDefault) WithStatusCode(code int) *PutBucketTagsDefault {
	o._statusCode = code
	return o
}

// SetStatusCode sets the status to the put bucket tags default response
func (o *PutBucketTagsDefault) SetStatusCode(code int) {
	o._statusCode = code
}

// WithPayload adds the payload to the put bucket tags default response
func (o *PutBucketTagsDefault) WithPayload(payload *models.APIError) *PutBucketTagsDefault {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the put bucket tags default response
func (o *PutBucketTagsDefault) SetPayload(payload *models.APIError) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *PutBucketTagsDefault) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(o._statusCode)
	if o.Payload != nil {
		payload := o.Payload
		if err := producer.Produce(rw, payload); err != nil {
			panic(err) // let the recovery middleware deal with this
		}
	}
}
