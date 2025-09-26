import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Edit, Trash2, Users, Bike, DollarSign, TrendingUp } from "lucide-react";

interface Motorcycle {
  id: string;
  name: string;
  brand: string;
  price: number;
  imageUrl: string;
  type: string;
  year: number;
  mileage?: number;
  isNew: boolean;
  description: string;
  stock: number;
}

interface AdminDashboardProps {
  motorcycles?: Motorcycle[];
  onAddMotorcycle?: (motorcycle: Omit<Motorcycle, 'id'>) => void;
  onUpdateMotorcycle?: (id: string, motorcycle: Partial<Motorcycle>) => void;
  onDeleteMotorcycle?: (id: string) => void;
}

export default function AdminDashboard({ 
  motorcycles = [], 
  onAddMotorcycle, 
  onUpdateMotorcycle, 
  onDeleteMotorcycle 
}: AdminDashboardProps) {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingMotorcycle, setEditingMotorcycle] = useState<Motorcycle | null>(null);
  const [newMotorcycle, setNewMotorcycle] = useState<Omit<Motorcycle, 'id'>>({
    name: '',
    brand: '',
    price: 0,
    imageUrl: '',
    type: 'Sport',
    year: new Date().getFullYear(),
    isNew: true,
    description: '',
    stock: 1
  });

  const stats = [
    {
      title: "Total Motorcycles",
      value: motorcycles.length,
      icon: Bike,
      description: "Bikes in inventory"
    },
    {
      title: "Total Value",
      value: `$${motorcycles.reduce((sum, bike) => sum + (bike.price * bike.stock), 0).toLocaleString()}`,
      icon: DollarSign,
      description: "Inventory value"
    },
    {
      title: "Low Stock Items",
      value: motorcycles.filter(bike => bike.stock <= 2).length,
      icon: TrendingUp,
      description: "Items with ≤2 stock"
    },
    {
      title: "New Arrivals",
      value: motorcycles.filter(bike => bike.isNew).length,
      icon: Users,
      description: "Brand new motorcycles"
    }
  ];

  const handleAddMotorcycle = () => {
    console.log('Adding motorcycle:', newMotorcycle);
    onAddMotorcycle?.(newMotorcycle);
    setIsAddModalOpen(false);
    setNewMotorcycle({
      name: '',
      brand: '',
      price: 0,
      imageUrl: '',
      type: 'Sport',
      year: new Date().getFullYear(),
      isNew: true,
      description: '',
      stock: 1
    });
  };

  const handleEditMotorcycle = (motorcycle: Motorcycle) => {
    console.log('Editing motorcycle:', motorcycle);
    setEditingMotorcycle(motorcycle);
  };

  const handleUpdateMotorcycle = () => {
    if (editingMotorcycle) {
      console.log('Updating motorcycle:', editingMotorcycle);
      onUpdateMotorcycle?.(editingMotorcycle.id, editingMotorcycle);
      setEditingMotorcycle(null);
    }
  };

  const handleDeleteMotorcycle = (id: string) => {
    console.log('Deleting motorcycle:', id);
    onDeleteMotorcycle?.(id);
  };

  return (
    <div className="space-y-6 p-6" data-testid="admin-dashboard">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold" data-testid="text-admin-title">
          Admin Dashboard
        </h1>
        <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
          <DialogTrigger asChild>
            <Button data-testid="button-add-motorcycle">
              <Plus className="h-4 w-4 mr-2" />
              Add Motorcycle
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Add New Motorcycle</DialogTitle>
            </DialogHeader>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={newMotorcycle.name}
                  onChange={(e) => setNewMotorcycle({ ...newMotorcycle, name: e.target.value })}
                  data-testid="input-add-name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="brand">Brand</Label>
                <Input
                  id="brand"
                  value={newMotorcycle.brand}
                  onChange={(e) => setNewMotorcycle({ ...newMotorcycle, brand: e.target.value })}
                  data-testid="input-add-brand"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="price">Price</Label>
                <Input
                  id="price"
                  type="number"
                  value={newMotorcycle.price}
                  onChange={(e) => setNewMotorcycle({ ...newMotorcycle, price: Number(e.target.value) })}
                  data-testid="input-add-price"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="type">Type</Label>
                <Select value={newMotorcycle.type} onValueChange={(value) => setNewMotorcycle({ ...newMotorcycle, type: value })}>
                  <SelectTrigger data-testid="select-add-type">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Sport">Sport</SelectItem>
                    <SelectItem value="Cruiser">Cruiser</SelectItem>
                    <SelectItem value="Touring">Touring</SelectItem>
                    <SelectItem value="Adventure">Adventure</SelectItem>
                    <SelectItem value="Naked">Naked</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="year">Year</Label>
                <Input
                  id="year"
                  type="number"
                  value={newMotorcycle.year}
                  onChange={(e) => setNewMotorcycle({ ...newMotorcycle, year: Number(e.target.value) })}
                  data-testid="input-add-year"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="stock">Stock</Label>
                <Input
                  id="stock"
                  type="number"
                  value={newMotorcycle.stock}
                  onChange={(e) => setNewMotorcycle({ ...newMotorcycle, stock: Number(e.target.value) })}
                  data-testid="input-add-stock"
                />
              </div>
              <div className="col-span-2 space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={newMotorcycle.description}
                  onChange={(e) => setNewMotorcycle({ ...newMotorcycle, description: e.target.value })}
                  data-testid="textarea-add-description"
                />
              </div>
            </div>
            <Button onClick={handleAddMotorcycle} className="w-full mt-4" data-testid="button-add-submit">
              Add Motorcycle
            </Button>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} data-testid={`stat-card-${index}`}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Motorcycle Inventory Table */}
      <Card>
        <CardHeader>
          <CardTitle>Motorcycle Inventory</CardTitle>
        </CardHeader>
        <CardContent>
          <Table data-testid="table-motorcycles">
            <TableHeader>
              <TableRow>
                <TableHead>Brand & Model</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Year</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Stock</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {motorcycles.map((motorcycle) => (
                <TableRow key={motorcycle.id} data-testid={`row-motorcycle-${motorcycle.id}`}>
                  <TableCell className="font-medium">
                    {motorcycle.brand} {motorcycle.name}
                  </TableCell>
                  <TableCell>{motorcycle.type}</TableCell>
                  <TableCell>{motorcycle.year}</TableCell>
                  <TableCell>${motorcycle.price.toLocaleString()}</TableCell>
                  <TableCell>
                    <Badge variant={motorcycle.stock <= 2 ? "destructive" : "default"}>
                      {motorcycle.stock}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={motorcycle.isNew ? "default" : "secondary"}>
                      {motorcycle.isNew ? "New" : "Used"}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleEditMotorcycle(motorcycle)}
                        data-testid={`button-edit-${motorcycle.id}`}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDeleteMotorcycle(motorcycle.id)}
                        data-testid={`button-delete-${motorcycle.id}`}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Edit Motorcycle Modal */}
      {editingMotorcycle && (
        <Dialog open={!!editingMotorcycle} onOpenChange={() => setEditingMotorcycle(null)}>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Edit Motorcycle</DialogTitle>
            </DialogHeader>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="edit-name">Name</Label>
                <Input
                  id="edit-name"
                  value={editingMotorcycle.name}
                  onChange={(e) => setEditingMotorcycle({ ...editingMotorcycle, name: e.target.value })}
                  data-testid="input-edit-name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-brand">Brand</Label>
                <Input
                  id="edit-brand"
                  value={editingMotorcycle.brand}
                  onChange={(e) => setEditingMotorcycle({ ...editingMotorcycle, brand: e.target.value })}
                  data-testid="input-edit-brand"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-price">Price</Label>
                <Input
                  id="edit-price"
                  type="number"
                  value={editingMotorcycle.price}
                  onChange={(e) => setEditingMotorcycle({ ...editingMotorcycle, price: Number(e.target.value) })}
                  data-testid="input-edit-price"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-stock">Stock</Label>
                <Input
                  id="edit-stock"
                  type="number"
                  value={editingMotorcycle.stock}
                  onChange={(e) => setEditingMotorcycle({ ...editingMotorcycle, stock: Number(e.target.value) })}
                  data-testid="input-edit-stock"
                />
              </div>
            </div>
            <Button onClick={handleUpdateMotorcycle} className="w-full mt-4" data-testid="button-edit-submit">
              Update Motorcycle
            </Button>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}