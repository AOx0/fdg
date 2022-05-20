use crate::ForceGraph;
use std::ops::RangeInclusive;

mod fruchterman_reingold;
mod translate;

pub use fruchterman_reingold::FruchtermanReingold;
pub use translate::Translate;

#[derive(Clone, Debug)]
pub enum Value {
    Number(f32, RangeInclusive<f32>),
    Bool(bool),
}

impl Value {
    pub const fn bool(&self) -> bool {
        match self {
            Self::Bool(b) => *b,
            _ => false,
        }
    }

    pub const fn number(&self) -> f32 {
        match self {
            Self::Number(n, _) => *n,
            _ => 0.0,
        }
    }
}

/// A trait that contains all the methods that you need to create a force on the simulation.
#[dyn_clonable::clonable]
pub trait Force<D>: Clone {
    /// Move the graph in any way you need.
    fn update(&self, graph: &mut ForceGraph<D>, dt: f32);
    /// Retrieve a mutable version of your internal dictionary that cooresponds to reused variables.
    fn dict_mut(&mut self) -> &mut [(&'static str, Value)];
    /// Retrieve your internal dictionary that cooresponds to reused variables.
    fn dict(&self) -> &[(&'static str, Value)];
    /// Reset your internal dictionary to the original settings.
    fn reset(&mut self);
    /// Retrieve a name for your force
    fn name(&self) -> &'static str;
    /// Retrieve if the force is continuous
    fn continuous(&self) -> bool;
}