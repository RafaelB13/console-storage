// Code generated by go-swagger; DO NOT EDIT.

// This file is part of MinIO Console Server
// Copyright (c) 2020 MinIO, Inc.
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

package models

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"github.com/go-openapi/errors"
	"github.com/go-openapi/strfmt"
	"github.com/go-openapi/swag"
)

// NodeInfo node info
//
// swagger:model nodeInfo
type NodeInfo struct {

	// Represents the resources of a node that are available for scheduling.
	AllocatableResources map[string]int64 `json:"allocatable_resources,omitempty"`

	// name
	Name string `json:"name,omitempty"`

	// taints
	Taints *NodeTaints `json:"taints,omitempty"`

	// Represents the total resources of a node.
	TotalResources map[string]int64 `json:"total_resources,omitempty"`
}

// Validate validates this node info
func (m *NodeInfo) Validate(formats strfmt.Registry) error {
	var res []error

	if err := m.validateTaints(formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *NodeInfo) validateTaints(formats strfmt.Registry) error {

	if swag.IsZero(m.Taints) { // not required
		return nil
	}

	if m.Taints != nil {
		if err := m.Taints.Validate(formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("taints")
			}
			return err
		}
	}

	return nil
}

// MarshalBinary interface implementation
func (m *NodeInfo) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *NodeInfo) UnmarshalBinary(b []byte) error {
	var res NodeInfo
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}
