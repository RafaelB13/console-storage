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

// GetBucketReplicationOKCode is the HTTP code returned for type GetBucketReplicationOK
const GetBucketReplicationOKCode int = 200

/*
GetBucketReplicationOK A successful response.

swagger:response getBucketReplicationOK
*/
type GetBucketReplicationOK struct {

	/*
	  In: Body
	*/
	Payload *models.BucketReplicationResponse `json:"body,omitempty"`
}

// NewGetBucketReplicationOK creates GetBucketReplicationOK with default headers values
func NewGetBucketReplicationOK() *GetBucketReplicationOK {

	return &GetBucketReplicationOK{}
}

// WithPayload adds the payload to the get bucket replication o k response
func (o *GetBucketReplicationOK) WithPayload(payload *models.BucketReplicationResponse) *GetBucketReplicationOK {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the get bucket replication o k response
func (o *GetBucketReplicationOK) SetPayload(payload *models.BucketReplicationResponse) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *GetBucketReplicationOK) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(200)
	if o.Payload != nil {
		payload := o.Payload
		if err := producer.Produce(rw, payload); err != nil {
			panic(err) // let the recovery middleware deal with this
		}
	}
}

/*
GetBucketReplicationDefault Generic error response.

swagger:response getBucketReplicationDefault
*/
type GetBucketReplicationDefault struct {
	_statusCode int

	/*
	  In: Body
	*/
	Payload *models.APIError `json:"body,omitempty"`
}

// NewGetBucketReplicationDefault creates GetBucketReplicationDefault with default headers values
func NewGetBucketReplicationDefault(code int) *GetBucketReplicationDefault {
	if code <= 0 {
		code = 500
	}

	return &GetBucketReplicationDefault{
		_statusCode: code,
	}
}

// WithStatusCode adds the status to the get bucket replication default response
func (o *GetBucketReplicationDefault) WithStatusCode(code int) *GetBucketReplicationDefault {
	o._statusCode = code
	return o
}

// SetStatusCode sets the status to the get bucket replication default response
func (o *GetBucketReplicationDefault) SetStatusCode(code int) {
	o._statusCode = code
}

// WithPayload adds the payload to the get bucket replication default response
func (o *GetBucketReplicationDefault) WithPayload(payload *models.APIError) *GetBucketReplicationDefault {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the get bucket replication default response
func (o *GetBucketReplicationDefault) SetPayload(payload *models.APIError) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *GetBucketReplicationDefault) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(o._statusCode)
	if o.Payload != nil {
		payload := o.Payload
		if err := producer.Produce(rw, payload); err != nil {
			panic(err) // let the recovery middleware deal with this
		}
	}
}
